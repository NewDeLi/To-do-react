import { useLocalStorageState } from "../utils/localStorage";
import { Checkbox } from "./Checkbox";
import styled from "styled-components";

export const TodoItem = ({ children, id, handleRemove, todo }) => {
  const [isDone, setDone] = useLocalStorageState(`isDoneState${id}`, false);
  const handleClick = () => {
    setDone(!isDone);
  };
  const boxClassName = isDone ? "setDone" : "isDone";
  return (
    <>
      <ListitemStyled className={boxClassName}>
        <Checkbox handleClick={handleClick} />
        <ChildrenStyle>{children}</ChildrenStyle>
        <DeleteStyle>
          <img
            src="/src/components/images/delete.png"
            alt="delete function"
            width="35vw"
            height="35vh"
            onClick={() => handleRemove(todo.id)}
          />
        </DeleteStyle>
      </ListitemStyled>
    </>
  );
};

const ListitemStyled = styled.li`
  margin: 3rem 0.8rem;
  max-width: 100%;
  border: 1px solid lightblue;
  box-shadow: 2px 2px 2px 1px lightblue;
  border-radius: 10px;
  display: flex;
  align-items: center;
  &.isDone {
    text-decoration: none;
  }
  &.setDone {
    text-decoration: line-through;
  }
`;
const ChildrenStyle = styled.p`
  flex-grow: 1;
  text-align: center;
`;
const DeleteStyle = styled.p`
  padding: 0 1rem;
`;
