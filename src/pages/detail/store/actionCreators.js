import * as constants from './constants'
<<<<<<< HEAD
import {fromJS} from 'immutable'
import axios from 'axios'

const getDetail=(title,content)=>({
  type:constants.ADD_DETAIL,
  title:title,
  content:content,
})

export const getDetailData = ()=>{
  return (dispatch)=>{
    axios.get('api/detail.json').then(
      res=>{
        dispatch(getDetail(res.data.data.title,res.data.data.content))
      }
    )
  }
}
=======
// import {fromJS} from 'immutable'
import axios from 'axios'

const actionDetail=(title,content)=>({
  type:constants.GET_DETAIL,
  title:title,
  content:content
})
export const getDetail = (id) => {
  return (dispatch) => { 
    axios.get(`/api/detail.json?id=${id}`).then(
    (res)=>{
      const result = res.data.data;
      dispatch(actionDetail(result.title,result.content))
    }
  ).catch(
    err=>console.log(err)
  )
  }
};
>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
