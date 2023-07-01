"use client";
import { useState } from "react";
const TodoItem = ({ item }) => {
  const [currentItem, setCurrentItem] = useState(item);

  const updateItem = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/list/${item.todoListId}`, {
      method: "PATCH",
      body: JSON.stringify({ todoItem: currentItem }),
    });
    const data = await response.json();
    if (response.status != 200) {
      // error
      return;
    }
    console.log(data);
    setCurrentItem(data.updatedTodoItem);
  };
  return (
    <div>
      <input
        className="hidden"
        type="checkbox"
        id={item.id}
        checked={currentItem.isChecked}
        onChange={updateItem}
      />
      <label
        className="flex items-center h-10 px-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-900"
        htmlFor={item.id}
      >
        <span className="flex items-center justify-center w-5 h-5 text-transparent border-2 border-gray-300 rounded-full">
          <svg
            className="w-4 h-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <span className="ml-4 text-sm">{item.text}</span>
      </label>
    </div>
  );
};

export default TodoItem;
