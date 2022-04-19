import React from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className='mapImg'>
        <div className='pinpoint shady_beach'></div>
        <div className='pinpoint surprise_park'></div>
      </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
