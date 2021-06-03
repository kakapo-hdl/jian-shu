import {fromJS} from 'immutable'
import {constants} from './index'
const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  recommendWrite:[],
  articlePage:1,
  showScroll:false
})
const reducer=(state = defaultState, action)=>{
  switch(action.type){
    case 'change_home_data': return state.merge({
      articleList:fromJS(action.articleList),
      recommendList:fromJS(action.recommendList),
      topicList:fromJS(action.topicList),
      recommendWrite:fromJS(action.recommendWrite)
    }); 
    case constants.ADD_HOME_LIST:
       return state.merge({
        "articleList":state.get('articleList').concat(action.list),
        "articlePage":action.page
       })
       case constants.TOGGLE_SCROLL_TOP:
        return state.set('showScroll',action.show)
    default:break;
  }
  return state;
} 
export default reducer;