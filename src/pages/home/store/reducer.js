import {fromJS} from 'immutable'

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  recommendWrite:[],
})
 const reducer=(state = defaultState, action)=>{
  switch(action.type){
    case 'change_home_data': return state.merge({
      articleList:fromJS(action.articleList),
      recommendList:fromJS(action.recommendList),
      topicList:fromJS(action.topicList),
      recommendWrite:fromJS(action.recommendWrite)
    }); 
    default:break;
  }
  return state;
} 
export default reducer;