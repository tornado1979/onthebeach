// action costants
import {
  SORT_ALPHBETICALLY,
  SORT_BY_PRICE,
  SORT_BY_RATING,
} from '../actionTypes'

import { getLocalState } from '../selectors'



export const changeSortOrder = (sortId) => {
  let sortedData=[]
  let type=''
  switch(sortId){
    case "0":
       sortedData = sortByField('hotel_name')
       type = SORT_ALPHBETICALLY
       break
    case "1":
       sortedData = sortByField('price')
       type = SORT_BY_PRICE
       break
    case "2":
       sortedData = sortByField('star_rating')
       type = SORT_BY_RATING
       break
    default:
       sortedData = sortByField('hotel_name')
       type = SORT_ALPHBETICALLY
       break
  }

  return {
    payload: {
      displayData: sortedData,
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
