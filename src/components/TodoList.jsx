import { CreateTodo } from "./CreateTodo.jsx";
import { TodoItem } from "./TodoItem.jsx";
import { v4 as uuidv4 } from "uuid";
import { useLocalStorageState } from "../utils/localStorage.js";
import styled from "styled-components";

export const TodoList = () => {
  const [todos, setTodos] = useLocalStorageState("todos", [
    { id: uuidv4(), name: "Dailey Morning" },
    { id: uuidv4(), name: "Dailey Journal" },
  ]);

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const ListItem = todos.map((todo) => {
    return (
      <TodoItem
        id={todo.id}
        key={todo.id}
        todo={todo}
        handleRemove={handleRemove}
      >
        {todo.name}
      </TodoItem>
    );
  });

  return (
    <>
      <HeaderStyle>To-Do</HeaderStyle>
      <section>
        <ul>{ListItem}</ul>
      </section>
      <CreateTodo
        onCreate={(name) => {
          const id = uuidv4();
          const newTodoObject = {
            id,
            name,
          };
          setTodos([...todos, newTodoObject]);
        }}
      />
    </>
  );
};

const HeaderStyle = styled.h1`
  text-align: center;
  background-color: lightblue;
  color: white;
  border: 2px solid lightblue;
  width: 100%;
  padding: 1rem;
  position: sticky;
  top: 0;
`;
