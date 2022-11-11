import React, { useEffect, useState } from 'react';
import RepoCard from '../components/RepoCard';
import { useDebounce } from '../hooks/debounce';
import { gitHubAPI } from '../store/gitHub.api';

const Home = () => {

  const [query, setQuery] = useState('')
  const [dropdown, setDropdown] = useState(false)
  const debounced = useDebounce(query, 500)
  const {isError: searchErr, isLoading: searchLoad, data: users} = gitHubAPI.useSearchUsersQuery({search: debounced, limit: 10}, {
    skip: debounced.length < 4,
    refetchOnFocus: true
  })
  useEffect(() => {
    setDropdown(debounced.length > 3 && users?.length! > 0)
  }, [debounced, users])
  const [fetchRepos, {data: userRepos, isLoading: areReposLoad}] = gitHubAPI.useLazyFetchUserReposQuery()

  const clickHandler = (username: string) => {
    fetchRepos(username)
    setDropdown(false)
  }
  
    return (
        <div className='pt-5'>
          <div className='mx-auto w-[500px]'>
            
            <input type="text" 
              placeholder='search for github users...' 
              className='p-2 border-2 w-full rounded-md'
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            {searchErr && <p className='text-red-700'>Error is coming...</p>}
            {dropdown && <ul 
              className='shadow-md border-2 rounded-md max-h-[200px] overflow-y-scroll'
            >
              {searchLoad && <p>Loading...</p>}
              {users?.map(user => (
                <li 
                  key={user.id}
                  className='cursor-pointer hover:bg-gray-300 p-1 transition-colors'
                  onClick={() => clickHandler(user.login)}
                >
                  {user.login}
                </li>
              ))}
            </ul>}
            {!dropdown && <div>
              {userRepos?.map(repo =>
                  <RepoCard key={repo.id} repo={repo} />
              )}
            </div>}
          </div>
        </div>
    );
};

export default Home;