import { useState } from 'react';
import './App.css';

function App() {

  const [todoTitle,setTodoTitle]=useState("");
  const [todoList,setTodoList]=useState([]);
  const [editMode,setEditMode]=useState(false);
  const [editableTodo, setEditableTodo]=useState(null); 

  // functions
  
  const createTodoHandler = () =>{
    if(todoTitle !== ""){
      const newTodo ={
        id: Date.now(),
        title: todoTitle,
        isComplete: false
      };


    
      setTodoList([...todoList, newTodo]);
      setTodoTitle("");


    }
    else {
      alert("Please enter valid title");
    }
  }

  const editTodoHandler=(id)=>{
    const todoToBeEdited = todoList.find((item) =>item.id===id);
    setEditMode(true);
    setEditableTodo(todoToBeEdited);
    setTodoTitle(todoToBeEdited.title);
  }

  const updateTodoHandler = () => {
    setTodoList(todoList.map((todo) => {
      if (todo.id === editableTodo.id) {
        todo.title = todoTitle;
      } 
      return todo;
    }));
    setEditMode(false);
    setTodoTitle("");
    setEditableTodo(null);
  }

  const deleteTodoHandler=(id)=>{
    const newTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(newTodoList);
  }


  return (
    <div className="App">
      <div>
        <input type="text" value = {todoTitle} onChange={(event)=>setTodoTitle(event.target.value)}/>

        <button onClick={()=>{editMode?updateTodoHandler():createTodoHandler() }}>

          {editMode?"Update Todo":"Add Todo"}
        
        </button>
        
        <ul>
          {todoList.map(todo=>(
            <li>
              <span>{todo.title}</span>

              <button onClick={()=> editTodoHandler(todo.id)}>Edit</button>
              
              <button onClick={()=>deleteTodoHandler(todo.id)}>Delete</button>
            </li>
          ))}


        </ul>


      </div>
    </div>
  );
}

export default App;
