// action costants
import {
  SORT_ALPHBETICALLY,
  SORT_BY_PRICE,
  SORT_BY_RATING,
  FILTER_BY_DEPART_DATE,
  FILTER_BY_DEPART_AIRPORT
} from '../actionTypes'

import { getLocalState, getAllState } from '../selectors'

/**
* @desc filter the sorted data, based on 'filterValue' & 'fieldName'
* @param array(object) $sortedData - the srted hotel data
* @param object $filterValue - e.g. 
* @param object $fieldName - e.g. 
* @return array of sorted AND filtered data
*/
const filterByField = (sortedData, filterValue, fieldName) => {
  return  sortedData.filter(item => item[fieldName] === filterValue);
}

export const changeFilter = (filterValue, fieldName) => {
  let type = '';
  let filteredData = [];

  // get the whole state
  const state = getAllState();
  //1. sort data from start, based on 'sortedBy' value 'hotel_name', 'price' etc
  const sortedData = sortByField(state.sortedBy)

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

export const sortByField = (fieldName) => {
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
