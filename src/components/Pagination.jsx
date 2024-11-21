import React from 'react';

export default function Pagination({ page, setPage }) {
  return (
    <div className="flex justify-center space-x-4 my-4">
      <button
        onClick={() => setPage(page - 1)}
        disabled={page <= 0}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  );
}

