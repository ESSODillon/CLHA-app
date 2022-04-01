import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Visit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonButton href='https://lassensresort.org/experiences/' color="warning">Checkout our Experiences</IonButton>
    </IonContent>
    </IonPage>
  );
};

export default Tab2;
