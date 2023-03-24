import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "./cake/cakeAction"

function HookCakesComponent() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(buyCake())
        }}
      >
        Buy Cake
      </button>
    </div>
  )
}

export default HookCakesComponent
