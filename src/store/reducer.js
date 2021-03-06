import { combineReducers } from "redux-immutable";
import {reducer as headerReducer } from '../common/header/store'
import {reducer as homeReducer} from '../pages/home/store'
import {reducer as detailRecudcer} from '../pages/detail/store'
import {reducer as loginRecudcer} from '../pages/login/store'
export default combineReducers({
  header: headerReducer,
  home:homeReducer,
  detail:detailRecudcer,
  login:loginRecudcer
})