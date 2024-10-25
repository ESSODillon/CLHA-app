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
  IonIcon,
} from "@ionic/react";
import "./Map.css";
import { pin, boat } from "ionicons/icons";

export default function Map() {
  const [mapData, setMapData] = useState([]);
  const [pinpoint, setPinpoint] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // Array of class names that should not display the pin icon
  const hiddenPinIcons = [
    "potawatomi_summer_camp",
    "lassens_resort",
    "cedar_lake_station",
  ];

  useEffect(() => {
    fetch("data/data.json")
      .then((response) => response.json())
      .then((data) => {
        setMapData(data);
      });
  }, [pinpoint]);

  const pinpointList = [
    { className: "lassens_resort" },
    { className: "binyons_resort" },
    { className: "toomeys_park" },
    { className: "shamrock_inn" },
    { className: "sans_souci_hotel" },
    { className: "olsen_hotel" },
    { className: "surprise_park" },
    { className: "shady_beach" },
    { className: "monon_park" },
    { className: "webber_paisley_hotel" },
    { className: "breuill_hotel" },
    { className: "john_mitch_hotel" },
    { className: "big3_inn" },
    { className: "cedar_lake_station" },
    { className: "sigler_monon" },
    { className: "gledenning_hotel" },
    { className: "hunter_hotel" },
    { className: "von_borstel_hotel" },
    { className: "terrace_garden_beach" },
    { className: "lakeview_hotel" },
    { className: "bartells_resort" },
    { className: "victors_beach" },
    { className: "iron_lantern_inn" },
    { className: "youngs_hotel" },
    { className: "huntsmans_lodge" },
    { className: "ellerys_inn" },
    { className: "top_flight_hotel" },
    { className: "sunset_hotel" },
    { className: "midway_gardens" },
    { className: "derby_hotel" },
    { className: "burke_hotel" },
    { className: "kennedy_hotel" },
    { className: "cedar_point_hotel" },
    { className: "stanleys_hotel" },
    { className: "potawatomi_summer_camp" },
    { className: "yacht_club" },
    { className: "pleasant_valley" },
    { className: "gerbings" },
    { className: "colemans_hotel" },
    { className: "cedar_beach_hotel" },
    { className: "john_adams_hotel" },
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resorts of Cedar Lake</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="mapPinpoints">
          <IonImg
            src="/assets/CLHA/Resort_Map_wall-min.jpg"
            className="mapImg"
          ></IonImg>

          {pinpointList.map((pinpoint, index) => (
            <div
              className={`pinpoint ${pinpoint.className}`}
              onClick={() => {
                setPinpoint(index);
                setShowModal(true);
              }}
              key={index}
            >
              {/* Conditionally render pinIcon */}
              {!hiddenPinIcons.includes(pinpoint.className) && (
                <IonIcon
                  icon={pinpoint.className === "yacht_club" ? boat : pin}
                  className={`pinIcon ${
                    pinpoint.className === "midway_gardens" ? "yellowPin" : ""
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {mapData.length > 1 && (
          <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
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
