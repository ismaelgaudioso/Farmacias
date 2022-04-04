import * as React from "react";
import './Tab1.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import { Map, Marker, ZoomControl } from "pigeon-maps";

const Tab1: React.FC = () => {

  const position = [41.3451, 1.0658];

  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className="map-container">
          <Map 
            attributionPrefix={false}
            defaultCenter={[41.580833, -1.116111]}
            defaultZoom={16}
            minZoom={15}            
          >
            <Marker width={50} anchor={[41.580833, -1.116111]}
            onClick={() => alert("Marker 1")} />
            <Marker width={50} anchor={[41.594343, -1.122111]} />
            <Marker width={50} anchor={[41.591154, -1.143111]} />
            <Marker width={50} anchor={[41.588027, -1.086111]} />
          </Map>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
