"use client";
import { LoadingList } from "@/app/components/LoadingList";
import TodoList from "@/app/components/TodoList";

import { useEffect, useState } from "react";

const ListPage = ({ params }) => {
  const [todoList, setTodoList] = useState(null);
  const [newItem, setNewItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const addItem = async (e) => {
    e.preventDefault();
    const response = await fetch(`/api/list/${params.listId}`, {
      method: "POST",
      body: JSON.stringify({ text: newItem }),
    });

    const data = await response.json();
    if (response.status != 200) {
      // error
      return;
    }
    setNewItem(null);
    setTodoList(data.todoList);
  };

  useEffect(() => {
    const getList = async () => {
      const response = await fetch(`/api/list/${params.listId}`);
      const data = await response.json();
      const reponseList = data.todoList;
      console.log(data);
      if (response.status == 200) {
        setTodoList(reponseList);
      }
      setIsLoading(false);
    };
    getList();
  }, []);

  return isLoading ? (
    <LoadingList />
  ) : todoList ? (
    <TodoList
      todoList={todoList}
      setNewItem={setNewItem}
      addItem={addItem}
      newItem={newItem}
    />
  ) : (
    <p>List Not Found</p>
  );
};

export default ListPage;
