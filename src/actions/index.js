// action costants
import {
  SORT_ALPHBETICALLY,
  SORT_BY_PRICE,
  SORT_BY_RATING,
  FILTER_BY_DEPART_DATE,
  FILTER_BY_DEPART_AIRPORT,
  RESET_FILTER
} from '../actionTypes'

import { getLocalState, getAllState } from '../selectors'



export const resetFilter = (filteredBy) => {
  return {
    payload: {
      [filteredBy]: '',
    },
    type: RESET_FILTER
  }
}
/**
* @desc filter the sorted data, based on 'filterValue' & 'fieldName'
* @param array(object) $sortedData - the srted hotel data
* @param object $filterValue - e.g. '25th May 2019' , 'Liverpool'
* @param object $fieldName - e.g. 'departAirport', 'departureDate'
* @return array of sorted AND filtered data
*/
const filterByField = (sortedData, filterValue, fieldName) => {
  return  sortedData.filter(item => item[fieldName] === filterValue);
}


/**
* @desc action to update filter on the state
* @param string $filterValue - e.g. '25th May 2019' , 'Liverpool'
* @param object $fieldName - e.g. 'departAirport', 'departureDate'
* @return array of sorted AND filtered data
*/
export const changeFilter = (filterValue, fieldName) => {
  let type = '';
  let filteredData = [];

  // get the whole state
  const state = getAllState();
  //1. sort data from start, based on 'sortedBy' value 'hotel_name', 'price' etc
  const sortedData = sortByField2(state.sortedBy)

  if(fieldName === 'departureDate'){
    //2. filter based on 'departureDate' on the sorted data
    filteredData = filterByField(sortedData, filterValue, fieldName)

    //3. filter based on 'departAirport', if there is already a filter selected (apply on the sorted data)
     const filteredBy2 = state.filteredBy2
     if(filteredBy2 !== ''){
       filteredData = filterByField(filteredData, filteredBy2.filterValue, filteredBy2.fieldName)
     }

      return {
        payload: {
          displayData: filteredData,
          filteredBy1: {filterValue, fieldName}
        },
        type: FILTER_BY_DEPART_DATE
      }
  } else {

    //2. filter based on 'departureDate', if there is already a filter selected (apply on the sorted data)
     const filteredBy1 = state.filteredBy1
     if(filteredBy1 !== ''){
       filteredData = filterByField(sortedData, filteredBy1.filterValue, filteredBy1.fieldName)
       //3. filter based on 'departAirport' on the sorted data
       filteredData = filterByField(filteredData, filterValue, fieldName)
     } else {
       // If there is no selected filter for 'departureDate'
       // then i filter on the sorted data
        filteredData = filterByField(sortedData, filterValue, fieldName)
     }

    

      return {
        payload: {
          displayData: filteredData,
          filteredBy2: {filterValue, fieldName}
        },
        type: FILTER_BY_DEPART_AIRPORT
      }
  }
}

export const changeSortOrder = (sortId) => {
  let sortedData=[]
  let type=''
  let sortedBy = ''

  switch(sortId){
    case "0":
       sortedData = sortByField('hotel_name')
       type = SORT_ALPHBETICALLY
       sortedBy = 'hotel_name'
       break
    case "1":
       sortedData = sortByField('price')
       type = SORT_BY_PRICE
       sortedBy = 'price'
       break
    case "2":
       sortedData = sortByField('star_rating')
       type = SORT_BY_RATING
       sortedBy = 'star_rating'
       break
    default:
       sortedData = sortByField('hotel_name')
       type = SORT_ALPHBETICALLY
       sortedBy = 'hotel_name'
  }

  return {
    payload: {
      displayData: sortedData,
      sortedBy
    },
    type,
  }
}


/**
* @desc action to update sort on the state
* @param string fieldName - e.g. 'hotel_name''
* @return array of sorted AND filtered data, if there are any filters selected.
*/
export const sortByField = (fieldName) => {
  // get the whole state
  const state = getAllState();
  let filteredData = null;

  //const data = getLocalState();

  //1. SORT THE DATA
  const sortedData = Array.prototype.slice.call(state.data).sort(function(a, b) {
    var nameA = a[fieldName]; // ignore upper and lowercase
    var nameB = b[fieldName]; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // values must be equal 
    return 0;
  });

  //2. FILTER BY filteredBy1 & filteredBy2
   const filteredBy1 = state.filteredBy1
   const filteredBy2 = state.filteredBy2

  if(filteredBy1 !== ''){
    filteredData = filterByField(sortedData, filteredBy1.filterValue, filteredBy1.fieldName)
     filteredData = filterByField(filteredData, filteredBy2.filterValue, filteredBy2.fieldName)
  }else if(filteredBy2 !== ''){
     filteredData = filterByField(sortedData, filteredBy2.filterValue, filteredBy2.fieldName)
  }
  //3. FILTER BY filteredBy2

  //4. return sorted and filtered array (if there are any filters selected)
  // or only sorted array
  return filteredData || sortedData;
}
//
export const sortByField2 = (fieldName) => {
  const data = getLocalState();

  return Array.prototype.slice.call(data).sort(function(a, b) {
    var nameA = a[fieldName]; // ignore upper and lowercase
    var nameB = b[fieldName]; // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // values must be equal
    return 0;
  });
} 
