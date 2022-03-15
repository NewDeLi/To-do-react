import { useLocalStorageState } from "../utils/localStorage";
import { IonIcon, IonItem } from "@ionic/react";
import { closeCircleOutline, checkmarkCircleOutline } from "ionicons/icons";
import "../pages/home.css";

export const TodoItem = ({ children, id, handleRemove, todo }) => {
  const [isDone, setDone] = useLocalStorageState(`isDoneState${id}`, false);
  const handleClick = () => {
    setDone(!isDone);
  };
  const boxClassName = isDone ? "setDone" : "isDone";
  return (
    <>
      <IonItem className={boxClassName}>
        <IonIcon icon={checkmarkCircleOutline} onClick={handleClick} />
        <p>{children}</p>
        <IonIcon
          icon={closeCircleOutline}
          slot="end"
          onClick={() => handleRemove(todo.id)}
        />
      </IonItem>
    </>
  );
};
