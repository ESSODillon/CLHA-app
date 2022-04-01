import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';
import IframeResizer from 'iframe-resizer-react';

const styleWebformIframeEmbed: React.CSSProperties = {
  width: '1px',
  minWidth: '100%',
  height: '100%'
};

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IframeResizer
        src=" https://nam12.safelinks.protection.outlook.com/?url=https%3A%2F%2Flassensresort.org%2Fexperiences&amp;data=04%7C01%7Cdtpolley%40iu.edu%7C3648d777ef9a4dab385608da0d9f9371%7C1113be34aed14d00ab4bcdd02510be91%7C0%7C0%7C637837276273985709%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C3000&amp;sdata=eYYBBpb7kmFnqxaW2Wbzt25H2DrAZqL8Bs8J3cu4WYQ%3D&amp;reserved=0 "
        title="CLHA | Donate"
        frameBorder="0"
        allowFullScreen
        style={styleWebformIframeEmbed}
      />
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
