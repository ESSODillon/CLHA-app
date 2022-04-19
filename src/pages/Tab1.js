import { useState, useEffect } from "react";
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
  }, [pinpoint]);

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
            className="pinpoint lassens_resort"
            onClick={() => {
              setPinpoint(0);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint shady_beach"
            onClick={() => {
              setPinpoint(7);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint surprise_park"
            onClick={() => {
              setPinpoint(6);
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
            <IonContent>
              <IonButton onClick={() => setShowModal(false)}>Close</IonButton>
              <IonCard>
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
