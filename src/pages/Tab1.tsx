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
        src="https://mywebar.com/p/Armchair4745"
        title="AR Demo"
        frameBorder="0"
        width="340" 
        height="600" 
        allow="camera; accelerometer; vr"
        allowFullScreen
        style={styleWebformIframeEmbed}
      />
    </IonContent>
    </IonPage>
  );
};

export default Tab1;
