import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonIcon, IonNote, IonRow, IonSearchbar, IonText } from "@ionic/react";

import { arrowForward, navigateOutline } from "ionicons/icons";

export const ListModal = ({hideModal}:any,{searchTerm}:any) => {

    return(
        <IonGrid>
            <IonRow>
                <IonCol size="12">                   
                    {console.log(searchTerm)}
                    <IonSearchbar
                        placeholder="Buscar..."
                        value={searchTerm}
                        onIonChange={ () => console.log("kk")}
                        />
                </IonCol>
            </IonRow>

            <IonRow>
               moco
            </IonRow>

        </IonGrid>

    );


}
