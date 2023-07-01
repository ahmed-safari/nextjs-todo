import TodoItem from "./TodoItem";

const TodoList = ({ todoList, addItem, setNewItem, newItem }) => {
  // console.log("Meow:", todoList);
  return (
    <>
      {/* <!-- Component Start --> */}
      <div className="p-8 w-11/12 rounded-lg shadow-lg dark:bg-gray-800 bg-white">
        <div className="flex items-center justify-between mb-6">
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
            <h4 className="font-semibold ml-3 dark:text-gray-200 text-lg uppercase">
              {todoList.title}
            </h4>
          </div>
          <button className="flex items-center px-3 py-1 bg-indigo-500 text-white font-small text-sm rounded hover:bg-indigo-600">
            Copy Link
          </button>
        </div>

        {todoList.todoItems.map((item) => {
          return <TodoItem item={item} key={item.id} />;
        })}
        {/* Copy-paste your tasks here */}

        <button
          // type="submit"
          className="flex items-center w-full h-8 px-2 mt-2 text-sm font-medium rounded"
        >
          <svg
            className="w-5 h-5 text-gray-400 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <form onSubmit={addItem}>
            <input
              className="flex-grow h-8 ml-4 bg-transparent dark:text-gray-300 focus:outline-none font-medium"
              type="text"
              value={newItem ? newItem : ""}
              onChange={(e) => setNewItem(e.target.value)}
              placeholder="add a new task"
            />
          </form>
        </button>
      </div>
      {/* <!-- Component End  --> */}
    </>
  );
};

export default TodoList;
