import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Home from "../containers/Home"
import AddCourse from "../containers/AddCourse"
import AddRound from "../containers/AddRound"

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/addcourse" component={AddCourse} />
        <Route exact path="/addround" component={AddRound} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
