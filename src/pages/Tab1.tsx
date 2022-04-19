import React, { useState } from 'react'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonModal, IonButton } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [data, setData] = useState(null)
  const [showModal, setShowModal] = useState(false);

  return (
    <IonPage className=''>
      <IonHeader>
        <IonToolbar>
          <IonTitle>CLHA | Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <div className='mapImg'>
        <div className='pinpoint shady_beach' onClick={() => setShowModal(true)}></div>
        <div className='pinpoint surprise_park' onClick={() => setShowModal(true)}></div>
      </div>

      <IonModal
          isOpen={showModal}
          swipeToClose={true}
          onDidDismiss={() => setShowModal(false)}>
          <IonButton  onClick={() => setShowModal(false)}>Close</IonButton>
          <p>This is modal content</p>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
