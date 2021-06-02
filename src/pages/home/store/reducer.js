import {fromJS} from 'immutable'
import {constants} from './index'
const defaultState = fromJS({
  topicList:[
    {
      id:0,
      title:'标题',
      imgUrl:'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg'
    },
    {
      id:1,
      title:'标题2',
      imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg'
    },
  ],
  articleList:[
    {
      id:1,
      title:"朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
      content:'社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。',
      imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg'
    },
    {
      id:2,
      title:"朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
      content:'社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。',
      imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg'
    },
    {
      id:3,
      title:"朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
      content:'社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。',
      imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg'
    },
    {
      id:4,
      title:"朋友圈中，层次越低的人，越喜欢用这3种“头像”来显摆自己",
      content:'社交平台拉近了人与人的距离，因此越来越多的人依赖于社交平台来进行沟通。 但是，社交平台在提高人们的沟通效率的同时，它也成为了更多人的情绪宣泄场。',
      imgUrl:'https://dss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3228549874,2173006364&fm=26&gp=0.jpg'
    }
  ],
  articlePage:1,
  recommendList:[],
  showScroll:false
})
 const reducer=(state = defaultState, action)=>{
  switch(action.type){
    case constants.ADD_HOME_LIST:
       return state.merge({
        "articleList":state.get('articleList').concat(action.list),
        "articlePage":action.page
       })
       case constants.TOGGLE_SCROLL_TOP:
        return state.set('showScroll',action.show)
      //  state.set("articleList",
    default:break;
  }
  return state;
} 
export default reducer;