import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonIcon } from '@ionic/react';
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
      <IonContent>
      <IonButton href='https://www.paypal.com/donate/?hosted_button_id=GXRQVNFFU49UQ' color="warning"><IonIcon slot="start" icon={logoPaypal} /> Donate to CLHA</IonButton>
    </IonContent>
    </IonPage>
  );
};

export default Tab3;
