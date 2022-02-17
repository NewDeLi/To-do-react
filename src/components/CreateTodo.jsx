import { IonItem, IonLabel, IonInput, IonButton, IonCol } from "@ionic/react";
// import styled from "styled-components";
import "../pages/home.css";

export const CreateTodo = ({ onCreate }) => {
  const handleClick = (event) => {
    event.preventDefault();
    const newTodo = event.target.elements.newTodo.value;
    onCreate(newTodo);
  };
  return (
    <>
      <form onSubmit={(event) => handleClick(event)}>
        <IonCol size="9">
          <IonItem>
            <IonLabel position="floating">New to-do</IonLabel>
            <IonInput
              type="text"
              name="newTodo"
              placeholder="add new todo here"
            />
          </IonItem>
        </IonCol>
        <IonCol size="3">
          <IonButton type="submit">Submit</IonButton>
        </IonCol>
      </form>

      {/* <DistanceStyle />
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
      </SectionStyle> */}
    </>
  );
};

// const DistanceStyle = styled.section`
//   height: 10vh;
// `;

// const SectionStyle = styled.section`
//   background-color: lightblue;
//   position: fixed;
//   bottom: 0;
//   right: 0;
//   left: 0;
//   form {
//     max-width: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
//   input {
//     all: unset;
//     height: 9vh;
//     flex-grow: 3;
//     padding: 0 1rem;
//   }
//   button {
//     all: unset;
//     height: 9vh;
//     flex-grow: 1;
//     background-color: white;
//     text-align: center;
//     padding: 0 1rem;
//   }
// `;
