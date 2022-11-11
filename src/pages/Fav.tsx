import React from 'react';
import { useAppSelector } from '../hooks/redux';

const Fav = () => {

    const {favourites} = useAppSelector(state => state.gitHubSlice)

    if(favourites.length == 0){
        return <p>no Fav's</p>
    }

    return (
        <ul>
         {favourites.map(fav =>
            <li key={fav}>
                {fav}
            </li>    
        )}   
        </ul>
    );
};

export default Fav;