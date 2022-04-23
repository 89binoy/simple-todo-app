const InputSection = (props) = {

    const createTodoHandler = () => {
        if (props.todoTitle !== "") {
          const newTodo = {
            id: Date.now(),
            title: todoTitle,
            isComplete: false,
          };   
          props.setTodoList([...props.todoList, newTodo]);
          props.setTodoTitle("");
        } else {
          alert("Please enter valid title");
        }
      };

          const updateTodoHandler = () => {
            props.setTodoList(
              props.todoList.map((todo) => {
                if (todo.id === props.editableTodo.id) {
                  todo.title = props.todoTitle;
                }
                return todo;
              })
            );
            props.setEditMode(false);
            props.setTodoTitle("");
            props.setEditableTodo(null);
          };

    return (
        <div className = "input-section" >
          <input
            type="text"
            value={props.todoTitle}
            onChange={(event) => props.setTodoTitle(event.target.value)}
          />
          <button
            onClick={() => {
              props.editMode ? updateTodoHandler() : createTodoHandler();
            }}
          >
            {props.editMode ? "Update Todo" : "Add Todo"}
          </button>
        </div >

    )
}

export default InputSection