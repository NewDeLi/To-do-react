
import { Checkbox } from "./Checkbox.jsx";
import { TodoItem } from "./TodoItem.jsx"

export const TodoList = () => {
    const todos = [
  { id: 0, name: "Müll leeren" },
  { id: 1, name: "Meal preparing" },
  { id: 2, name: "Geburtstagsgeschenk" },
    ];
    const mapIt = todos.map((todo) => {
        return <TodoItem key={todo.id}><Checkbox/>{todo.name}</TodoItem>
    })

    return <>
       
        <ul><h1>To-Do</h1>
            {mapIt}
        </ul>    
    </>
}; 