import * as constants from './constants'
import {fromJS} from 'immutable'
import axios from 'axios'

export const addHomeList = (list,nextPage)=>({
  type:constants.ADD_HOME_LIST,
  list:fromJS(list),
  page:nextPage
})
export const toggleTopShow = (isShow)=>({
  type:constants.TOGGLE_SCROLL_TOP,
  show:isShow
})

export const getMoreList = (page)=>{
  return (dispatch) => { 
    axios.get(`api/homeList.json?page=${page}`).then(
      res=>{
        const  result= res.data.data;
        dispatch(addHomeList(result,page+1));
      }
    ).catch(
          err=>console.log(err)
        )
  }
}


// export const getList = () => {
//   return (dispatch) => { 
//   axios.get('api/headerList.json').then(
//     res=>{
//       const data = res.data;
//       dispatch(changeList(data.data))
//     }
//   ).catch(
//     err=>console.log(err)
//   )
//   }
// };