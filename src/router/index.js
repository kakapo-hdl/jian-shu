import React,{Component} from 'react'
import { HashRouter,Switch,Route } from 'react-router-dom'
import asyncComponent from './asyncComponent'

const Detail = asyncComponent(()=>import('../pages/detail'))
const Home = asyncComponent(()=>import('../pages/home'))
const Login = asyncComponent(()=>import('../pages/home'))

export default class RouteConfig extends Component {
  render(){
    return(
      <HashRouter>
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/Detail" component={Detail}></Route>
          <Route path="/Login" component={Login}></Route>

        </Switch>
      </HashRouter>
    )
  }
}