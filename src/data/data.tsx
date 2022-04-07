import data from "./data.json"
import { setStore } from "./RecordsStore";

export const getRecords = async (currentPoint: any) => {
    // llamada a los datos
    setStore(data);

}

export const getRecord = async (recordId: any) => {
    return data;
}

export const getCategories = async () => {

    return data;
}