import { IonBadge, IonButton, IonCardSubtitle, IonCol, IonIcon, IonNote, IonRow } from "@ionic/react";
import { call, callOutline, navigateOutline } from "ionicons/icons";
import styles from "./MapOverlay.module.scss";

export const MapOverlay = ( {record} : any ) => (

    <div className={ styles.overlayContainer }>

        <IonCardSubtitle>{ record.name } </IonCardSubtitle>
        <IonNote color="medium">{ record.address }</IonNote>

        <p>
            <IonIcon icon={navigateOutline} />
            4 km
        </p>
        

        <IonRow className="ion-no-padding ion-no-margin ion-margin-top">
            <IonCol size="12" className="ion-no-padding ion-no-margin">
                <IonButton color="primary" fill="solid" size="small" expand="block" routerLink={ `/list/${ record.id }`}>
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