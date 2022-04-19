import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonModal,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
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
          <div
            className="pinpoint lassens_resort"
            onClick={() => {
              setPinpoint(2);
              setShowModal(true);
            }}
          ></div>
        </div>

        {mapData.length > 1 && (
          <IonModal
            isOpen={showModal}
            className="map--card"
            swipeToClose={true}
            onDidDismiss={() => setShowModal(false)}
          >
            <IonContent>
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              <IonCard className="map--card">
                <IonCardHeader>
                  <IonCardSubtitle>{mapData[pinpoint].time}</IonCardSubtitle>
                  <IonCardTitle>{mapData[pinpoint].name}</IonCardTitle>
                </IonCardHeader>
                {mapData[pinpoint].description.map((paragraph) => (
                  <IonCardContent>{paragraph}</IonCardContent>
                ))}
              </IonCard>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
}
