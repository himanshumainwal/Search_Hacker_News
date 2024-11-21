import React from 'react';
import { Link } from 'react-router-dom';

export default function NewsList({ news }) {
  if (!news || news.length === 0) {
    return <div>Select News in Search Box....</div>;
  }

  const getTimeAgo = (createdAt) => {
    const now = new Date();
    const createdDate = new Date(createdAt);
    const diffInSeconds = Math.floor((now - createdDate) / 1000);

    if (diffInSeconds < 60) {
      return `${diffInSeconds} seconds ago`;
    } else if (diffInSeconds < 3600) {
      const minutes = Math.floor(diffInSeconds / 60);
      return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
    } else if (diffInSeconds < 86400) {
      const hours = Math.floor(diffInSeconds / 3600);
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    } else {
      const days = Math.floor(diffInSeconds / 86400);
      return `${days} day${days > 1 ? "s" : ""} ago`;
    }
  };

  return (
    <>
      {news.map((item) => (
        <>
          <div key={item.objectID} className=" flex gap-1 items-center">
            {/* {console.log(item)} */}
            <h3 className='w-auto'>{item.title}</h3>
            <Link
              to={item.story_url || item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 flex items-center"
            >
              ({item.story_url || item.url})
            </Link>
          </div>
          <div>
            <p className='text-gray-400 mb-2 space-x-4 text-xs' >{item.points || 0} points  |  {item.author}  |  {getTimeAgo(item.created_at)}  |  {item.num_comments} comments</p>
          </div>
        </>
      ))}
    </>
  );
}

