import Header from './common/header'
import React ,{Component} from 'react'
import store from './store'
import {Provider} from 'react-redux'
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import Home from './pages/home';
import Detail from './pages/detail'
class App extends Component{  
  render(){
    return(
      <Provider store={store}>


      <BrowserRouter>
        <Header></Header>
        <Route path='/' exact component={Home}></Route>
        <Route path='/detail/:id' exact component={Detail}></Route>
      </BrowserRouter>

      </Provider>
    )
  }
}
export default App;
