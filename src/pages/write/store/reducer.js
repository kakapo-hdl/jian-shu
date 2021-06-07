import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  login:false
})

const reducer= (state= defaultState,action ) => {
  switch(action.type){ 
    case constants.CHANGE_LOGIN: return state.set('login',action.data)
    case constants.CHANGE_LOGOUT: return state.set('login',action.data)
    default: break ;
  }
  return state
}
export default reducer;