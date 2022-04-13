import { IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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
    </IonPage>
  );
};

export default Tab1;
