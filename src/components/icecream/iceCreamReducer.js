export const iceCreamReducer = (state = { noOfIceCream: 15 }, action) => {
  switch (action.type) {
    case "BUY_ICECREAM":
      return {
        ...state,
        noOfIceCream: state.noOfIceCream - 1,
      }
    default:
      return state
  }
}
