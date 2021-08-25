const SET_DESTINATION = 'SET_DESTINATION'


export function setDestination(destination) {
  return {
  type: SET_DESTINATION,
  destination
  }
}


const initialState = null

const destinationReducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_DESTINATION:
      return action.destination
    default:
      return state;
  }
}
export default destinationReducer;
