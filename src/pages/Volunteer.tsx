import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Volunteer.css";
import IframeResizer from "iframe-resizer-react";

const styleWebformIframeEmbed: React.CSSProperties = {
  width: "1px",
  minWidth: "100%",
  height: "100%",
};

export default function Volunteer() {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Volunteer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IframeResizer
          src="https://www.surveymonkey.com/r/D7VJMMG"
          title="CLHA | Volunteer"
          frameBorder="0"
          allowFullScreen
          style={styleWebformIframeEmbed}
        />
      </IonContent>
    </IonPage>
  );
}
