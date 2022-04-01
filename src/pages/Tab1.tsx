import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed: React.CSSProperties = {
  width: '1px',
  minWidth: '100%',
  height: '100%'
};

const Tab1: React.FC = () => {
  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IframeResizer
        src="https://www.google.com/maps/embed/v1/place?q=7408%20Constitution%20Ave%2C%20Cedar%20Lake%2C%20IN%2046303&key=..."
        title="CLHA | Volunteer"
        frameBorder="0"
        allowFullScreen
        style={styleWebformIframeEmbed}
      />
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
