import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
} from "@ionic/react";
import "./Tab1.css";

export default function Tab1() {
  const [mapData, setMapData] = useState([]);
  const [pinpoint, setPinpoint] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMapData(data);
      });
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="mapImg">
          <div
            className="pinpoint shady_beach"
            onClick={() => {
              setPinpoint(0);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint surprise_park"
            onClick={() => {
              setPinpoint(1);
              setShowModal(true);
            }}
          ></div>
        </div>

        {mapData.length > 1 && (
          <IonModal
            isOpen={showModal}
            swipeToClose={true}
            onDidDismiss={() => setShowModal(false)}
          >
            <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
            <p>{mapData[pinpoint].name}</p>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
}
