import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonImg, IonText } from '@ionic/react';
import './Visit.css';

export default function Visit() {
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
            <IonText color='secondary'><h1 className="visitHeader">Experiences:</h1></IonText>
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
