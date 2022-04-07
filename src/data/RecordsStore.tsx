import { Store } from 'pullstate';

const RecordsStore = new Store({

	records: [],
});

export default RecordsStore;

export const setStore = (records: any) => {

	RecordsStore.update(state => { state.records = records });

}