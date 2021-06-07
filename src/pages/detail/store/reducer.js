import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  title:'',
  content:``
})

const reducer = (state= defaultState,action ) => {
  console.log(action);
  switch(action.type){ 
    case constants.ADD_DETAIL: 
    return state.merge({
      title:action.title,
      content:action.content
    })
    default: break ;
  }
  return state
}
export default reducer;