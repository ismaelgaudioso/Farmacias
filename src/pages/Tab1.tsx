import { useEffect, useState } from 'react';
import './Tab1.css';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, useIonViewDidEnter, isPlatform, IonCardSubtitle, IonNote, IonFab, IonFabButton, IonIcon, IonBadge, IonRow, IonCol, IonButton } from '@ionic/react';
import { Map, Marker, Overlay } from "pigeon-maps";
import { maptiler } from 'pigeon-maps/providers';
import { flashOffOutline, flashOutline, list, arrowForward, call, callOutline, navigateOutline, phoneLandscapeOutline, phonePortraitOutline, pricetag, pricetags, pricetagsOutline } from 'ionicons/icons';
import { MapOverlay } from '../components/MapOverlay';


const maptilerProvider = maptiler('rQmJ3tL4fQSG3TUeAarU', 'streets');

const Tab1: React.FC = () => {

  const [currentPoint, setCurrentPoint] = useState({ latitude: 41.580833, longitude: -1.116111 });
  const [markerPosition] = useState({ latitude: 41.578633, longitude: -1.114111 });
  const web = isPlatform("desktop" || "pwa" || "mobileweb" || "");


  useIonViewDidEnter(() => {
    window.dispatchEvent(new Event('resize'));
  });

  const handleShowCurrentPointInfo = () => {
    alert("moco");

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
            <Overlay anchor={[currentPoint.latitude, currentPoint.longitude]} offset={[95, 182]}>
              <div className="overlayContainer">

                <IonCardSubtitle>Current Location</IonCardSubtitle>
                <IonNote color="medium">Click on the lightning button then choose a new point on the map to view places around that point.</IonNote>
              </div>
            </Overlay>






            <Marker onClick={handleShowCurrentPointInfo}
              key={0}
              color="#3578e5"
              width={40}
              anchor={[markerPosition.latitude, markerPosition.longitude]} />

            <Overlay anchor={[markerPosition.latitude, markerPosition.longitude]} offset={[95, 210]}>
              <MapOverlay />
            </Overlay>







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
