import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { MdOutlineSettings } from "react-icons/md";

export default function Navbar({ username }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Navigate to Dashboard
    if (query) {
      navigate(`/dashboard?query=${query}`);
    }
  };

  return (
    <nav className="flex justify-between items-center bg-orange-500 p-4 text-white">
      <div className="flex items-center space-x-2 text-xl text-black">
        <span>{username ? `Hi, ${username}` : 'Search Hacker News'}</span>
      </div>

      <div className="flex rounded items-center w-3/4 bg-white text-orange-400">
        <div className='px-3 text-xl'><FaSearch /></div>
        <input
          type="text"
          className="p-2 border-none w-4/5 text-black outline-none rounded"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search stories by title , url and author"
          onKeyUp={handleSearch}
        />
        <div className='flex items-center gap-3'>
          <p className='text-gray-400 text-sm'>Search by </p>
          <h2 className='text-blue-700 text-2xl'>algolia</h2>
        </div>
      </div>
      <div className='text-3xl text-black'><MdOutlineSettings /></div>
    </nav>
  );
}

