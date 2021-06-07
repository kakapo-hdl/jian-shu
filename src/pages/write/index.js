import React,{PureComponent} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router';
import { actionCreator } from './store';
import {
  LoginWrapper,
  LoginBox,
  Input,
  Button
} from './style'
// import { actionCreator } from './store'

class Login extends PureComponent{
  render(){
    const {handleLogin,login} = this.props;
      if(!login){
        return(     
           <LoginWrapper>
          <LoginBox>
            <Input placeholder="账号" ref={(input) => {this.account = input}}></Input>
            <Input placeholder="密码" ref={(password) => {this.password = password}} type="password"></Input>
            <Button onClick={()=>handleLogin(this.account,this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>)
      }else{
        return <Redirect to="/"></Redirect>
      }

  }  

  componentDidMount(){}
}
const mapDispatch=(dispatch)=>({
  handleLogin(accountElement,passwordElement){
    dispatch(actionCreator.login(accountElement.value,passwordElement.value))
    // console.log(accountElement.value,passwordElement.value);
  }
})
const mapState = (state) => ({
  login:state.getIn(['login','login'])
})
export default connect(mapState,mapDispatch)(Login);
 