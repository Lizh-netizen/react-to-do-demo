"use client"
import TodoFilter from '@/components/TodoFilter';
import TodoItem from '@/components/TodoItem';
import TodoList from '@/components/TodoList';
import AddTodo from '@/components/AddTodo';
import { useState } from 'react';
import { Todo } from '@/types';
export default function Home() {
  // todo是一个state
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState('all')
  // 对todos进行操作, add
  const addTodo = (text: string) => {
    const todo = {
      id: Date.now(),
      text,
      completed: false,
    }
    setTodos([...todos, todo]);
  };
  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleTodo = (id: number) => {
    setTodos(todos.map((todo) => {
      if (todo.id === id) {
          todo.completed = !todo.completed;
      }
      return todo;
    }));
  };
  const getFilteredTodos = () => {
    switch (filter) {
      case 'all':
        return todos;
      case 'completed':
        return todos.filter((todo) => todo.completed);
      case 'active':
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }
  return (
    <>
    <AddTodo addTodo={addTodo}></AddTodo>
      <TodoList todos={getFilteredTodos()} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
      <TodoFilter setFilter={setFilter} ></TodoFilter>
      </>
  );
}
