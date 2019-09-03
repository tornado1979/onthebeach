import {
  SORT_ALPHBETICALLY,
  SORT_BY_PRICE,
  SORT_BY_RATING,
} from '../actionTypes'

const initialState = {
  data: [
    {
      id: 1,
      hotel_name: "Iberostar Grand Salome",
      location: "costa adeje, Tenerife",
      star_rating: 5,
      image:"../assets/images/image_01.png",
      adults: 2,
      children: 1,
      infants: 1,
      dateStart: "3rd July 2019",
      days: 7,
      departFrom: "East Midlands",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..",
      price:1136.50
    },
    {
      id: 2,
      hotel_name: "Iberostar Grand Salome",
      location: "costa adeje, Tenerife",
      star_rating: 5,
      image:"../assets/images/image_01.png",
      adults: 2,
      children: 1,
      infants: 1,
      dateStart: "3rd July 2019",
      days: 7,
      departFrom: "East Midlands",
      overview: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged..",
      price:1136.50
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_ALPHBETICALLY:
      return {
        ...state,
        ...action.payload
      }
    case SORT_BY_PRICE:
      return {
        ...state,
        ...action.payload
      }
    case SORT_BY_RATING:
     return {
       ...state,
       ...action.payload
     }
    default:
      return state
  }
}

export default reducer;
