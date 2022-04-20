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
        <div className='donateWrapper'>
          <IonText>
            <h1 className='donateHeader'>Be a part of history</h1>
            <p>Help us present the relevvance of Cedar Lake</p>
            <h1 className='donateHeader'>Donate with PayPal</h1>
          </IonText>
          <IonText>
            <p>Every donation helps us present the relevance of and tell the story of Cedar Lake. Make a one-time or recurring gift with this secure PayPal link.</p>
          </IonText>
          <IonButton className='donateBtn' href='https://www.paypal.com/donate/?hosted_button_id=GXRQVNFFU49UQ' color="secondary"><IonIcon slot="start" icon={logoPaypal} /> Donate </IonButton>
        </div>
    </IonContent>
    </IonPage>
  );
};

export default Tab3;
