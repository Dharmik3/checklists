import React from 'react'
import './styles.css'
import SingleTodo from './SingleTodo';
import { useTasksStore } from '../tasksStore';


const TodoList = () => {
     const todos = useTasksStore((state) => state.todos);
  return (
    <div className="todos">
      {todos.map((todo) => (
        <SingleTodo
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
    
}

export default TodoList