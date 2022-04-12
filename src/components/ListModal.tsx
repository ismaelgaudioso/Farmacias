import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonNote, IonRow, IonSearchbar, IonText } from "@ionic/react";

import { arrowForward, navigateOutline } from "ionicons/icons";
import styles from "./ViewAll.module.scss";

export const ListModal = ({hideModal,search,searchTerm,records}:any) => {

    return(
        <IonGrid>
            <IonRow>
                <IonCol size="12">         
                    <IonSearchbar
                        placeholder="Buscar..."
                        value={searchTerm}
                        onIonChange={ () => console.log("kk")}
                        />
                </IonCol>
            </IonRow>

            <IonRow>
                <div className={ styles.viewCardContainerModal }>
                { records.map((record:any, index:any) => {
                    return (
                        <IonCard key={ `record_${ index }` } className={ `${ styles.viewCardModal } animate__animated animate__faster animate__fadeIn` } routerLink={ `/list/${ record.id }` } onClick={ hideModal }>
                            <IonCardHeader>
                            <IonCardSubtitle>{ record.name }</IonCardSubtitle>
									<IonNote color="medium">{ record.displayAddress }</IonNote>

									<IonRow className="ion-justify-content-between ion-align-items-center">
										<IonText color="primary">
											<p>
												<IonIcon icon={ navigateOutline } />
												{ record.distance } miles away
											</p>
										</IonText>

										<IonButton size="small" color="primary">
											<IonIcon icon={ arrowForward } />
										</IonButton>
									</IonRow>
                            </IonCardHeader>
                        </IonCard>
                    )
                })}
                </div>
            </IonRow>

        </IonGrid>

    );


}
