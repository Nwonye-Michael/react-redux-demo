import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { buyCake } from "./cake/cakeAction"

function NewCakeContainer() {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes)
  const dispatch = useDispatch()
  const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of cakes - {noOfCakes}</h2>
      <input
        type="text"
        style={{ width: "20px", marginRight: "5px" }}
        value={number}
        onChange={(e) => {
          setNumber(e.target.value)
        }}
      />

      <button
        onClick={(e) => {
          e.preventDefault()
          dispatch(buyCake(number))
        }}
      >
        Buy {number} Cake
      </button>
    </div>
  )
}

export default NewCakeContainer
