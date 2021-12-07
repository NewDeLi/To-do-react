import styled from "styled-components";

export const CreateTodo = ({ onCreate }) => {
  return (
    <>
      <DistanceStyle />
      <SectionStyle>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            const newTodo = event.target.elements.newTodo.value;
            onCreate(newTodo);
          }}
        >
          <input type="text" name="newTodo" placeholder="add new todo here" />
          <button type="submit">✔</button>
        </form>
      </SectionStyle>
    </>
  );
};

const DistanceStyle = styled.section`
  height: 10vh;
`;

const SectionStyle = styled.section`
  background-color: lightblue;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  form {
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input {
    all: unset;
    height: 9vh;
    flex-grow: 3;
    padding: 0 1rem;
  }
  button {
    all: unset;
    height: 9vh;
    flex-grow: 1;
    background-color: white;
    text-align: center;
    padding: 0 1rem;
  }
`;
