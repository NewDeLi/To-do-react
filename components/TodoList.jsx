
import { Checkbox } from "./Checkbox.jsx";
import { TodoItem } from "./TodoItem.jsx"

export const TodoList = () => {
    return <>
       
        <ul><h1>To-Do</h1>
            <TodoItem><Checkbox/>Müll leeren</TodoItem>
            <TodoItem><Checkbox/>Meal preparing</TodoItem>
            <TodoItem><Checkbox/>Personalanzeigen</TodoItem>
            <TodoItem><Checkbox/>Pokemon-App</TodoItem>
            <TodoItem><Checkbox/>Geburtstagsgeschenk</TodoItem>
        </ul>    
    </>
};