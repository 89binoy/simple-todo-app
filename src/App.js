import { useState } from "react";
import "./App.css";
import InputSection from "./components/InputSection";
import TodoList from "./components/TodoList";

function App() {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableTodo, setEditableTodo] = useState(null);

  // functions

  



  return (
    <div className="App">
      <div>
        <InputSection
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        editMode={editMode}
        setEditMode={setEditMode}
        editableTodo={editableTodo}
        setEditableTodo={setEditableTodo}

        />
        <TodoList
        setTodoTitle={setTodoTitle}
        todoList={todoList}
        setTodoList={setTodoList}
        setEditMode={setEditMode}
        setEditableTodo={setEditableTodo}
        
        />
        
      </div>
    </div>
  );
}

export default App;
