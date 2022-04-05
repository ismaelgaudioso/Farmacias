import { useEffect, useState } from 'react';

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, isPlatform, IonCardSubtitle, IonNote, IonFab, IonFabButton, IonIcon, IonBadge, IonRow, IonCol, IonButton } from '@ionic/react';
import { list } from 'ionicons/icons';

import { Map, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';

import { MapOverlay } from '../components/MapOverlay';
import { CurrentPointOverlay } from '../components/CurrentPointOverlay';

import './Tab1.css';




const maptilerProvider = maptiler('rQmJ3tL4fQSG3TUeAarU', 'streets');

const Tab1: React.FC = () => {

  const [currentPoint, setCurrentPoint] = useState({ latitude: 41.580833, longitude: -1.116111 });
  const [showCurrentPointInfo, setShowCurrentPointInfo] = useState(false);

  const [markerPosition] = useState({ latitude: 41.578633, longitude: -1.114111 });
  const [results, setResults] = useState(false);

  const web = isPlatform("desktop" || "pwa" || "mobileweb" || "");


  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  const hideMarkers = () => {
    setResults(false);
    setShowCurrentPointInfo(false);
  }

  const showMarkerInfo = () => {

    setShowCurrentPointInfo(!showCurrentPointInfo);
    setResults(!results);

  }

  const handleShowCurrentPointInfo = () => {
    hideMarkers();
    setShowCurrentPointInfo(!showCurrentPointInfo);
  }

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
            defaultCenter={[currentPoint.latitude, currentPoint.longitude]}
            defaultZoom={16}
            minZoom={15}
            provider={maptilerProvider}
          >

            <Marker
              onClick={handleShowCurrentPointInfo}
              color="red"
              width={50}
              anchor={[currentPoint.latitude, currentPoint.longitude]}
            />
            {showCurrentPointInfo &&
              <Overlay anchor={[currentPoint.latitude, currentPoint.longitude]} offset={[95, 140]}>
                <CurrentPointOverlay />
              </Overlay>
            }


            <Marker onClick={showMarkerInfo}
              key={0}
              color="#3578e5"
              width={40}
              anchor={[markerPosition.latitude, markerPosition.longitude]} />
            {results &&
              <Overlay anchor={[markerPosition.latitude, markerPosition.longitude]} offset={[95, 210]}>
                <MapOverlay />
              </Overlay>
            }






            <IonFab vertical="bottom" horizontal="start" slot="fixed" onClick={() => alert("Lista")}>
              <IonFabButton>
                <IonIcon icon={list} />
              </IonFabButton>
            </IonFab>


          </Map>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
