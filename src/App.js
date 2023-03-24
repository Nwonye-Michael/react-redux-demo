import "./App.css"
import React from "react"

import { Provider, useSelector } from "react-redux"
import HookCakesComponent from "./components/HookCakesComponent"
import { store } from "./components/redux/store"
import HookIceCreamComponent from "./components/HookIceCreamComponent"
import NewCakeContainer from "./components/NewCakeContainer"
import ItemContainer from "./components/itemContainer"
import Usercontainer from "./components/Usercontainer"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <HookCakesComponent />
        <HookIceCreamComponent />
        <NewCakeContainer />
        <ItemContainer cake />
        <ItemContainer /> */}
        <Usercontainer />
      </div>
    </Provider>
  )
}

export default App
