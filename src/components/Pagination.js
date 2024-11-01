import React from 'react'

const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-1 mt-12 mb-8">
      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-400">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-purple-600 text-white">
        1
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
        2
      </button>

      <button className="flex items-center justify-center px-1">...</button>

      <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100">
        4
      </button>

      <button className="w-8 h-8 flex items-center justify-center rounded-lg text-gray-600 hover:bg-gray-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>
    </div>
  )
}

export default Pagination
