const SET_TRAVEL_TIME = 'SET_TRAVEL_TIME'


export function setTravelTime(time) {
  return {
  type: SET_TRAVEL_TIME,
  time
  }
}


const initialState = null

const travelTimeReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_TRAVEL_TIME:
      return action.time
    default:
      return state;
  }
}
export default travelTimeReducer;
