import { IonItem, IonLabel, IonInput, IonButton, IonCol } from "@ionic/react";
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
        <IonCol size="8">
          <IonItem>
            <IonLabel position="floating">New to-do</IonLabel>
            <IonInput
              type="text"
              name="newTodo"
              placeholder="add new todo here"
            />
          </IonItem>
        </IonCol>
        <IonCol size="4">
          <IonButton type="submit" size="large">
            Submit
          </IonButton>
        </IonCol>
      </form>
    </>
  );
};
