import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import { useTasksStore } from "../tasksStore";
interface Props {
  todo: Todo;
  
}

const SingleTodo = ({ todo }: Props) => {
//   const removeTodo = useTasksStore((state) => state.removeTodo);
//   const changeTodo = useTasksStore((state) => state.editTodo);
//   const doneToggle = useTasksStore((state) => state.toggleDone);
const { removeTodo, editTodo : changeTodo, toggleDone } = useTasksStore();
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    changeTodo({ id, todo: editTodo, isDone: false });
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  return (
    <form
      className="todos__single"
      style={todo.isDone ? { background: "#2eb52e" } : {}}
      onSubmit={(e) => handleEdit(e, todo.id)}
    >
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="todos__single--text"
        />
      ) : todo.isDone ? (
        <s className="todos__single--text" style={{ background: "#2eb52e" }}>
          {todo.todo}
        </s>
      ) : (
        <span className="todos__single--text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => removeTodo(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => toggleDone(todo.id)}>
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
