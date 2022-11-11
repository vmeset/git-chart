import React, { FC } from 'react';
import { useActions } from '../hooks/actions';
import {IRepo} from '../models/repoModels'

interface RepoCardProps {
    repo: IRepo
}

const RepoCard:FC<RepoCardProps> = ({repo}) => {

    const isFav = false

    const {addFav, removeFav} = useActions()

    const addToFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        addFav(repo.html_url)
    }
    const removeFromFavourite = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        removeFav(repo.html_url)
    }

    return (
        <div className="border py-3 px-5 rounded mb-2 hover:shadow-md hover:bg-gray-100 transition-all">
            <a href={repo.html_url} target="_blank">
                <h2 className="text-lg font-bold">{repo.full_name}</h2>
                <p className="text-sm">
                Forks: <span className="font-bold mr-2">{repo.forks}</span>
                Watchers: <span className="font-bold">{repo.watchers}</span>
                </p>
                <p className="text-sm font-thin">{repo?.description}</p>

                {!isFav && <button
                className="py-2 px-4 bg-yellow-400 mr-2 rounded hover:shadow-md transition-all"
                onClick={addToFavourite}
                >Add</button>}

                {isFav && <button
                className="py-2 px-4 bg-red-400 rounded hover:shadow-md transition-all"
                onClick={removeFromFavourite}
                >Remove</button>}
            </a>
        </div>
    );
};

export default RepoCard;