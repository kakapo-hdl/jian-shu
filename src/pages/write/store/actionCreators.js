import * as constants from './constants'
// import {fromJS} from 'immutable'
import axios from 'axios'

const changeLogin=(data)=>({
  type:constants.CHANGE_LOGIN,
  data:data
})

const changeLogout=(data)=>({
  type:constants.CHANGE_LOGOUT,
  data:data
})
export const login = (accout, password) => {
  return (dispatch) => { 
    axios.get(`/api/login.json?account=${accout}&password=${password}`).then(
    (res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin(result))
      }else {
        alert('login fail')
      }
    }
  ).catch(
    err=>console.log(err)
  )
  }
};

export const logout = () => {
  return (dispatch) => { 
    dispatch(changeLogout(false))
  }
};
