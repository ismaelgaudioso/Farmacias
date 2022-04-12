import { IonAvatar, IonBackButton, IonBadge, IonButton, IonButtons, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonNote, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonModal, useIonViewWillEnter } from "@ionic/react";
import { callOutline } from "ionicons/icons";
import { Map, Marker } from "pigeon-maps";
import { useState } from "react";
import { useParams } from "react-router";

import { maptiler } from 'pigeon-maps/providers';
import { useRef } from "react";
import RecordsStore from "../data/RecordsStore";
import { fetchRecord } from "../data/Selectors";

import styles from "./ViewPlace.module.scss";
import { getRecord } from "../data/data";

const maptilerProvider = maptiler('rQmJ3tL4fQSG3TUeAarU', 'streets');




const ViewPlace = ({}) => {

	const pageRef = useRef();
	const [ present, dismiss ] = useIonLoading();
	const { id }:any = useParams();
	const record = RecordsStore.useState(fetchRecord(id));
	const [ extendedRecord, setExtendedRecord ] = useState();


	

    const MapView = () => (
		<IonContent className="ion-text-center">

			<IonHeader>
				<IonToolbar>

					<IonButtons slot="start">
						<IonButton onClick={ dismissModal }>Close</IonButton>
					</IonButtons>
					<IonTitle>Map View</IonTitle>
				</IonToolbar>
			</IonHeader>

				
		</IonContent>
	);

	const [ presentModal, dismissModal ] = useIonModal(MapView);

	return (

		<IonPage>
			<IonHeader>
				<IonToolbar>

					<IonButtons slot="start">
						<IonBackButton text="All places" />
					</IonButtons>
					<IonTitle>{record.name} - 4 Km de distancia</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent fullscreen>
				<IonHeader collapse="condense">
					<IonToolbar>
						<div className={ styles.cardImage } >
							<IonRow>
								<IonCol size="8">
									<IonCardSubtitle>
										<IonNote> {record.name} - 4 km de distancia</IonNote>
									</IonCardSubtitle>
								</IonCol>
							</IonRow>
						</div>	
					</IonToolbar>
				</IonHeader>
				
				<IonGrid>
					<IonRow className={ styles.categoryContainer }>
						

						<IonCol size="4" className="ion-justify-content-between">
							<a href="record.name" target="_blank" rel="noreferrer">View on Yelp &rarr;</a>
						</IonCol>
					</IonRow>

					<IonRow>
						<IonCol size="16">
							{record.name}
						</IonCol>
					</IonRow>

					<IonRow className="ion-margin-top">
						<IonCol size="6">
							<a href={ `tel:976001122` }>
								<IonButton color="primary" expand="block">
									<IonIcon icon={ callOutline } />
								</IonButton>
							</a>
						</IonCol>

						<IonCol size="6">
							<IonButton color="primary" expand="block" fill="outline" onClick={ () => presentModal({

								presentingElement: pageRef.current
							}) }>
								View on map
							</IonButton>
						</IonCol>
					</IonRow>

			

					
				</IonGrid>
			</IonContent>
		</IonPage>
	);
}

export default ViewPlace;
