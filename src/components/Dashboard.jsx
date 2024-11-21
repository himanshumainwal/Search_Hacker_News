import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Filters from './Filters';
import NewsList from './NewsList';
import Pagination from './Pagination';

export default function Dashboard() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query') || '';
    const type = params.get('type') || 'all';
    const sort = params.get('sort') || 'popularity';
    const time = params.get('time') || 'all_time';

    let apiUrl = `https://hn.algolia.com/api/v1/search?query=${query}&tags=${type}&page=${page}`;

    if (sort === 'date') {
      apiUrl += '&sort=byDate';
    }

    if (time !== 'all_time') {
      const now = Math.floor(Date.now() / 1000);
      const timeFilters = {
        last_24_hours: now - 24 * 60 * 60,
        last_week: now - 7 * 24 * 60 * 60,
        last_month: now - 30 * 24 * 60 * 60,
        last_year: now - 365 * 24 * 60 * 60,
      };
      apiUrl += `&numericFilters=created_at_i>${timeFilters[time]}`;
    }

    setLoading(true);
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setNews(data.hits || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, [location.search, page]);

  return (
    <div className="container mx-auto">
      <Filters />
      {loading ? <div>Loading...</div> : <NewsList news={news} />}
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

