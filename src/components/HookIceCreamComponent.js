import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyIcecream } from "./icecream/iceCreamAction"

function HookIceCreamComponent() {
  const noOfIceCreams = useSelector((state) => state.iceCream.noOfIceCream)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of ice cream - {noOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(buyIcecream())
        }}
      >
        Buy ice cream
      </button>
    </div>
  )
}

export default HookIceCreamComponent
