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
  IonImg,
} from "@ionic/react";
import "./Map.css";

export default function Map() {
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
        {/* mapImg is a big relative with the background image. On top of it are a bunch of tiny absolute divs, (uncomment the red border on pinpoint class in Map.css to see visual) each of these divs points to an array in data.json and opens a modal component setup below */}
        <div className="mapImg">
          <div
            className="pinpoint lassens_resort"
            onClick={() => {
              setPinpoint(0);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint binyons_resort"
            onClick={() => {
              setPinpoint(1);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint toomeys_park"
            onClick={() => {
              setPinpoint(2);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint shamrock_inn"
            onClick={() => {
              setPinpoint(3);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint sans_souci_hotel"
            onClick={() => {
              setPinpoint(4);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint olsen_hotel"
            onClick={() => {
              setPinpoint(5);
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
          <div
            className="pinpoint shady_beach"
            onClick={() => {
              setPinpoint(7);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint monon_park"
            onClick={() => {
              setPinpoint(8);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint webber_paisley_hotel"
            onClick={() => {
              setPinpoint(9);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint breuill_hotel"
            onClick={() => {
              setPinpoint(10);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint john_mitch_hotel"
            onClick={() => {
              setPinpoint(11);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint big3_inn"
            onClick={() => {
              setPinpoint(12);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint cedar_lake_station"
            onClick={() => {
              setPinpoint(13);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint sigler_monon"
            onClick={() => {
              setPinpoint(14);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint gledenning_hotel"
            onClick={() => {
              setPinpoint(15);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint hunter_hotel"
            onClick={() => {
              setPinpoint(16);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint von_borstel_hotel"
            onClick={() => {
              setPinpoint(17);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint terrace_garden_beach"
            onClick={() => {
              setPinpoint(18);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint lakeview_hotel"
            onClick={() => {
              setPinpoint(19);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint bartells_resort"
            onClick={() => {
              setPinpoint(20);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint victors_beach"
            onClick={() => {
              setPinpoint(21);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint iron_lantern_inn"
            onClick={() => {
              setPinpoint(22);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint youngs_hotel"
            onClick={() => {
              setPinpoint(23);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint huntsmans_lodge"
            onClick={() => {
              setPinpoint(24);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint ellerys_inn"
            onClick={() => {
              setPinpoint(25);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint top_flight_hotel"
            onClick={() => {
              setPinpoint(26);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint sunset_hotel"
            onClick={() => {
              setPinpoint(27);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint midway_gardens"
            onClick={() => {
              setPinpoint(28);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint derby_hotel"
            onClick={() => {
              setPinpoint(29);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint burke_hotel"
            onClick={() => {
              setPinpoint(30);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint kennedy_hotel"
            onClick={() => {
              setPinpoint(31);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint cedar_point_hotel"
            onClick={() => {
              setPinpoint(32);
              setShowModal(true);
            }}
          ></div>
          <div
            className="pinpoint stanleys_hotel"
            onClick={() => {
              setPinpoint(33);
              setShowModal(true);
            }}
          ></div>
          {/* Below div was not found on image map */}

          {/* <div
            className="pinpoint cedar_lake_yacht_club"
            onClick={() => {
              setPinpoint(34);
              setShowModal(true);
            }}
          ></div> */}
        </div>

        {mapData.length > 1 && (
          <IonModal
            isOpen={showModal}
            swipeToClose={true}
            onDidDismiss={() => setShowModal(false)}
          >
            <IonContent>
              <IonCard>
                <IonCardHeader>
                  <IonButton
                    className="modal_button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </IonButton>
                  <IonCardSubtitle className="modal_subtitle">
                    {mapData[pinpoint].time}
                  </IonCardSubtitle>
                  <IonCardTitle className="modal_title">
                    {mapData[pinpoint].name}
                  </IonCardTitle>
                </IonCardHeader>
                {mapData[pinpoint].description.map((paragraph) => (
                  <IonCardContent>{paragraph}</IonCardContent>
                ))}
                {mapData[pinpoint].images.map((image) => (
                  <IonImg className="modalImage" src={image}></IonImg>
                ))}
              </IonCard>
            </IonContent>
          </IonModal>
        )}
      </IonContent>
    </IonPage>
  );
}
