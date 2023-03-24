export const cakeReducer = (state = { noOfCakes: 10 }, action) => {
  switch (action.type) {
    case "BUY_CAKE":
      return {
        ...state,
        noOfCakes: state.noOfCakes - action.payload,
      }
    default:
      return state
  }
}
