import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Tab1.css';

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
      <IonContent>
      <IonImg className='mapImg' src='/assets/CLHA/Resort_Map_wall.jpg'></IonImg>

      </IonContent>
    </IonPage>
  );
};

export default Tab1;
