import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  title:'',
<<<<<<< HEAD
  content:``
=======
  content:''
>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
})

const reducer = (state= defaultState,action ) => {
  console.log(action);
  switch(action.type){ 
<<<<<<< HEAD
    case constants.ADD_DETAIL: 
    return state.merge({
=======
    case constants.GET_DETAIL: return state.merge({
>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
      title:action.title,
      content:action.content
    })
    default: break ;
  }
  return state
}
export default reducer;