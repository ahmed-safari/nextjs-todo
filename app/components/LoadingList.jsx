import React from "react";

export const LoadingList = () => {
  return (
    <div className="p-8 w-11/12 rounded-lg shadow-lg dark:bg-gray-800 bg-white">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <svg
            className="h-8 w-8 text-indigo-500 stroke-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
            />
          </svg>
          <h4 className="font-semibold ml-3 dark:text-gray-200 text-lg rounded shadow animate-pulse dark:divide-gray-700  dark:border-gray-700">
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5 "></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </h4>
        </div>
      </div>
      <div
        role="status"
        className="p-4 w-full space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700  dark:border-gray-700"
      >
        <div className="flex items-center justify-between">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <div className="flex items-center justify-between pt-4">
          <div>
            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
        </div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};
