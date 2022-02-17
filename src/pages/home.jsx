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
    <IonPage background-color="primary">
      <IonHeader>
        <IonToolbar color="primary" className="ion-padding">
          <IonTitle>To-do-List</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen className="ion-padding" background="primary">
        <IonGrid color="secondary">
          <TodoList />
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
