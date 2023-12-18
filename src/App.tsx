import "./App.css";
import InputFeild from "./components/InputFeild";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  
  return (
    <div className="App">
      <span className="heading">tasks done</span>

      <InputFeild  />
      <TodoList  />

     
    </div>
  );
};

export default App;
