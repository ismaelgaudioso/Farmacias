import { IonBadge, IonButton, IonCardSubtitle, IonCol, IonIcon, IonNote, IonRow } from "@ionic/react";
import { call, callOutline, navigateOutline } from "ionicons/icons";
import styles from "./MapOverlay.module.scss";

export const MapOverlay = () => (
    <div className={ styles.overlayContainer }>

        <IonCardSubtitle>Registro </IonCardSubtitle>
        <IonNote color="medium">Dirección registro 1</IonNote>

        <p>
            <IonIcon icon={navigateOutline} />
            4 km
        </p>
        

        <IonRow className="ion-no-padding ion-no-margin ion-margin-top">
            <IonCol size="12" className="ion-no-padding ion-no-margin">
                <IonButton color="primary" fill="solid" size="small" expand="block" routerLink={`/list/26`}>
                    View &rarr;
                </IonButton>
            </IonCol>
        </IonRow>

        <IonRow className="ion-no-padding ion-no-margin">


            <IonCol size="6" className="ion-no-padding ion-no-margin">
                <IonButton color="primary" fill="outline" size="small" expand="block">
                    <IonIcon icon={callOutline} />
                </IonButton>
            </IonCol>


            <IonCol size="6" className="ion-no-padding ion-no-margin">
                <IonButton color="primary" fill="outline" size="small" expand="block">
                    <IonIcon icon={navigateOutline} />
                </IonButton>
            </IonCol>
        </IonRow>
    </div>
)