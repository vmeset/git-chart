import React, { useEffect, useState } from 'react';
import { useDebounce } from '../hooks/debounce';
import { jsonPhAPI } from '../store/jsonPh.api';

const JsonPh = () => {

    const [filter, setFilter] = useState('')
    const [dropDown, setDropDown] = useState(false)
    const {isError, isLoading, data} = jsonPhAPI.useFetchUsersQuery({limit: -1, page: 1})
    const debounced = useDebounce(filter, 500)

    useEffect(() => {
      setDropDown(debounced.length > 1 && data?.length! > 0)
    }, [debounced, data])

    const filteredUsers = data?.filter(user => user.name.toLowerCase().includes(filter.toLowerCase()))
    
    return (
        <div
            className='mx-auto w-[600px] items-center pt-5'
        >
            <input type="text" 
                className='p-2 w-full border-2 rounded-md'
                placeholder='Search...'
                value={filter}
                onChange={e => setFilter(e.target.value)}
            />
            {dropDown && 
            <ul
                className='p-1 w-full border-2 rounded-md'
            >
                {filteredUsers?.map((user: any) => 
                    <li key={user.id}
                        className='hover:bg-gray-300 cursor-pointer'
                    >
                        {user.name}
                    </li>
                )}
            </ul>}
        </div>
    );
};

export default JsonPh;