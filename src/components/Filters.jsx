import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Filters() {
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('popularity');
  const [time, setTime] = useState('all_time');

  const navigate = useNavigate();
  const location = useLocation();

  const handleFilterChange = (key, value) => {
    const params = new URLSearchParams(location.search);

    if (key === 'type') {
      setType(value);
      params.set('type', value);
    } else if (key === 'sort') {
      setSort(value);
      params.set('sort', value);
    } else if (key === 'time') {
      setTime(value);
      params.set('time', value);
    }

    navigate(`/dashboard?${params.toString()}`);
  };

  return (
    <div className="mb-2 space-x-2 bg-white flex items-center text-center p-4">
      <span>Search</span>
      <select
        className="border p-1"
        value={type}
        onChange={(e) => handleFilterChange('type', e.target.value)}
      >
        <option value="all">All</option>
        <option value="story">Stories</option>
        <option value="comment">Comments</option>
        <option value="ask_hn">Ask HN</option>
        <option value="show_hn">Show HN</option>
        <option value="launch_hn">Launch HN</option>
        <option value="job">Jobs</option>
        <option value="poll">Polls</option>
      </select>

      <span>by</span>
      <select
        className="border p-1"
        value={sort}
        onChange={(e) => handleFilterChange('sort', e.target.value)}
      >
        <option value="popularity">Popularity</option>
        <option value="date">Date</option>
      </select>

      <span>for</span>
      <select
        className="border p-1"
        value={time}
        onChange={(e) => handleFilterChange('time', e.target.value)}
      >
        <option value="all_time">All Time</option>
        <option value="last_24_hours">Past 24 Hours</option>
        <option value="last_week">Past Week</option>
        <option value="last_month">Past Month</option>
        <option value="last_year">Past Year</option>
      </select>
    </div>
  );
};  
