import { createSelector } from 'reselect';

const getState = (state: any) => state;

//  General getters
export const fetchRecords = createSelector(getState, state => state.records);

//  More specific getters
export const fetchRecord = (recordId: any) => createSelector(getState, state => {

	return state.records.filter( (record:any) => record.id == recordId)[0];

});
