import React from "react"
import { Route, Switch } from "react-router"
import "./App.css"
import Landing from "./Pages/Landing"
import Contact from "./Pages/Contact"
import GetApi from "./Pages/GetApi"

function App() {
  return (
    <Switch>
      <Route path='/' exact component={Landing} />
      <Route path='/data' exact component={GetApi} />
      <Route path='/form' exact component={Contact} />
    </Switch>
  )
}

export default App
