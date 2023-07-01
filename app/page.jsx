"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Home = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [listTitle, setListTitle] = useState(null);
  const createList = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const res = await fetch("api/list/new", {
      method: "POST",
      body: JSON.stringify({ listTitle: listTitle }),
    });
    const data = await res.json();

    if (res.status != 200) {
      setIsLoading(false);
      setError(data.message);
      console.error(error);
      return;
    }

    const { todoList } = data;
    router.push(`/list/${todoList.code}`);
    // setError(null);
    // setIsLoading(false);

    console.log(data);
  };

  return (
    <>
      {/* <!-- Component Start --> */}
      <div className="p-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <div className="flex items-center mb-6">
          <svg
            className="h-8 w-8 text-indigo-500 dark:text-indigo-200 stroke-current"
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
          <h4 className="font-semibold ml-3 text-lg dark:text-gray-200">
            Create a New To-do List
          </h4>
        </div>
        <form onSubmit={createList}>
          <div className="mb-6">
            <input
              className="w-full px-4 py-2 text-gray-700 bg-gray-200 dark:text-gray-200 dark:bg-gray-700 border border-gray-300 rounded"
              type="text"
              onChange={(e) => setListTitle(e.target.value)}
              placeholder="Enter your list title"
              required
            />
          </div>
          {error && (
            <div
              className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
              role="alert"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 inline w-5 h-5 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Info</span>
              <div>
                <span className="font-medium">{error}</span>
              </div>
            </div>
          )}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full h-10 px-4 text-sm text-white bg-indigo-500 rounded hover:bg-indigo-600"
          >
            {isLoading ? "Creating List.. " : "Create List"}
          </button>
        </form>
      </div>
      {/* <!-- Component End  --> */}
    </>
  );
};

export default Home;
