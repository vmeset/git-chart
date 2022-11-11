import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className='flex justify-between items-center h-[50px] bg-gray-200 shadow-md'>
           <p className='px-5'>gitHub</p>
           <div>
            <Link to='/' className='p-4 hover:bg-gray-500'>Home</Link>
            <Link to='/fav' className='p-4 hover:bg-gray-500'>Favourites</Link>
            <Link to='/jsonph' className='p-4 hover:bg-gray-500'>JSON Ph</Link>
           </div>
        </nav>
    );
};

export default NavBar;