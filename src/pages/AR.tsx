import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed: React.CSSProperties = {
  width: '1px',
  minWidth: '100%',
  height: '100%'
};

const AR: React.FC = () => {
  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | AR Demo</IonTitle>
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

export default AR;
