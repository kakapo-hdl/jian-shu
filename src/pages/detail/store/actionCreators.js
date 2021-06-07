import * as constants from './constants'
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