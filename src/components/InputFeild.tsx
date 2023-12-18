import React, { useRef, useState } from "react";
import "./styles.css";
import { useTasksStore } from "../tasksStore";

const InputFeild = () => {
  const [todo, setTodo] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const addTodo = useTasksStore((state) => state.addTodo);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        e.preventDefault();
        addTodo({ id: Date.now(), todo, isDone: false });
        inputRef.current?.blur();
        setTodo("")
      }}
    >
      <input
        ref={inputRef}
        type="input"
        placeholder="Enter your checklist"
        className="input__box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="input_submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
