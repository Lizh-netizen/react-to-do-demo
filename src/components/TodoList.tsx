import { Todo } from '@/types';
import TodoItem from "./TodoItem";
interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleTodo: (id: number) => void;
}
function TodoList({todos, deleteTodo, toggleTodo} : TodoListProps) {
  return (
    todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    ))
  );

}
export default TodoList