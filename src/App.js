import React,{ Component } from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
//, Link, Redirect
import Admin from './pages/Admin'
import Login from './pages/Login'

import './App.less'

class App extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Admin} />
        </Switch>
      </Router>
    )
  }
}
export default App;