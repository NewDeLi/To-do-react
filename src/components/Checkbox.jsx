import styled from "styled-components";

export const Checkbox = ({ handleClick }) => {
  return (
    <>
      <CheckboxStyle
        onClick={handleClick}
        id="todo-0"
        type="checkbox"
        defaultChecked={false}
      />
      <label className="todo-label" htmlFor="todo-0"></label>
    </>
  );
};
const CheckboxStyle = styled.input`
  width: 5vw;
  height: 5vh;
  margin: 1rem;
`;
