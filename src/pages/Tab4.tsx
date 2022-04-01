import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab4.css';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed: React.CSSProperties = {
  width: '1px',
  minWidth: '100%',
  height: '100%'
};

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Volunteer</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IframeResizer
        src="https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.surveymonkey.com%2Fr%2FD7VJMMG&amp;data=04%7C01%7Cdtpolley%40iu.edu%7C3648d777ef9a4dab385608da0d9f9371%7C1113be34aed14d00ab4bcdd02510be91%7C0%7C0%7C637837276273985709%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=vR2O3KMggBMB6t%2F2AK9pRQB5S4JGx4spkEMN0ij%2B3YY%3D&amp;reserved=0"
        title="CLHA | Donate"
        frameBorder="0"
        allowFullScreen
        style={styleWebformIframeEmbed}
      />
    </IonContent>
    </IonPage>
  );
};

export default Tab4;
