import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon, IonText } from '@ionic/react';
import { logoPaypal } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Donate</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='medium'>
        <IonText color=''><h1>Donate with PayPal</h1></IonText>
        <IonText color=''>
          <p>Every donation helps us present the relevance of and tell the story of Cedar Lake. Make a one-time or recurring gift with this secure PayPal link.</p>
        </IonText>
        <IonButton href='https://www.paypal.com/donate/?hosted_button_id=GXRQVNFFU49UQ' color="secondary"><IonIcon slot="start" icon={logoPaypal} /> Donate </IonButton>
    </IonContent>
    </IonPage>
  );
};

export default Tab3;
