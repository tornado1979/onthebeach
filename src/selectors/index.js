import store from '../store'

export const getAllState = () => {
  return store.getState()
}

export const getLocalState = () => {
  return store.getState().data
}

export const getData = (state) => {
  return (state && state.data) || []
}

export const getDisplayData = (state) => {
  return (state && state.displayData) || []
}

export const getOptions = (state) => {
  return (state && state.options) || []
}

export const getPlural = (state) => {
  return (state && state.plural) || []
}

/**
* @desc gets the fieldName , e.g. 'departureDate' and returns an array with all the UNIQUE values
* @param string $fieldName - the field name that i want to add on the filters, e.g. departDate
* @param obj $state - the state object
* @return array, e.g. [{text: '1t April 2019', fieldNama: 'departureDate'}]
*/
export const getFiltersByFieldName = (fieldName, state) => {
  let filters = [];
  let tempArr=[]; // on that array i keep the unique filter values.
  for(var i=0;i<state.data.length;i++){
  
    for(let key in state.data[i]){
  
       if(key === fieldName && !tempArr.includes(state.data[i][key])){
          tempArr.push(state.data[i][key])
			    filters.push({fieldName, 'text':state.data[i][key]})
      }
    }
}
  return filters;
}
