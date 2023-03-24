import React from "react"
import { connect } from "react-redux"
import { buyIcecream } from "./icecream/iceCreamAction"
import { buyCake } from "./cake/cakeAction"

function itemContainer(props) {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={() => props.buyItem()}> Buy Item</button>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.noOfCakes
    : state.iceCream.noOfIceCream

  return {
    item: itemState,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIcecream())

  return { buyItem: dispatchFunction }
}

export default connect(mapStateToProps, mapDispatchToProps)(itemContainer)
