import React from "react"
import { combineReducers } from "redux"
import { cakeReducer } from "../cake/cakeReducer"
import { iceCreamReducer } from "../icecream/iceCreamReducer"
import UserReducer from "../user/UserReducer"
export const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
  user: UserReducer,
})
