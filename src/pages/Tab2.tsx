import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonText } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Visit</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color='primary'>
        <div className='visitWrapper'>
          <IonImg className='visitImg' src='/assets/CLHA/Museum_at_Lassens_Logo_Small_RGB.png'></IonImg>
          <div className='visitText'>
            <IonText color='secondary'><h1>Experiences:</h1></IonText>
            <IonText color='tertiary'>
              <p>- Museum tours open May through September</p>
              <p>- Special events year round</p>
              <p>- Book private parties in our unique venue</p>
            </IonText>
          </div>
          <IonButton className='visitBtn' href='https://lassensresort.org/experiences/' color='secondary'>Check out our Experiences</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
