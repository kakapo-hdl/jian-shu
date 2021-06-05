import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

const actionDetail=(title,content)=>({
  type:constants.GET_DETAIL,
  title:title,
  content:content
})
export const getDetail = () => {
  return (dispatch) => { 
    axios.get('api/detail.json').then(
    (res)=>{
      const result = res.data.data;
      dispatch(actionDetail(result.title,result.content))
    }
  ).catch(
    err=>console.log(err)
  )
  }
};
