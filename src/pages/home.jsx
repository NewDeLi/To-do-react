import React from "react";
import {
  IonContent,
  IonGrid,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { TodoList } from "../components/TodoList";
import "./Home.css";
import "../index.css";

const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary" className="ion-padding">
          <IonTitle>To-do-List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen="true" className="ion-padding">
        <IonGrid>
          <TodoList />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
