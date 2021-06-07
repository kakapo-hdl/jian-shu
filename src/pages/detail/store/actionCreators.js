import * as constants from './constants'
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
