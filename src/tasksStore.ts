import { create } from "zustand";
import { Todo } from "./model";
import { devtools, persist } from "zustand/middleware";

interface TodoState {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  removeTodo: (todoId: number) => void;
  toggleDone: (todoId: number) => void;
  editTodo: (todo: Todo) => void;
}

const useTasksStore = create<TodoState>()(
  devtools(
    persist((set) => ({
      todos: [],
      addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
      removeTodo: (todoId) =>
        set((state) => ({ todos: state.todos.filter((t) => t.id !== todoId) })),
      toggleDone: (todoId) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === todoId ? { ...t, isDone: !t.isDone } : t
          ),
        })),
      editTodo: (todo: Todo) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === todo.id ? { ...t, todo: todo.todo } : t
          ),
        })),
    }),
        {name:'tasks'}
    )
  )
);

export { useTasksStore };
