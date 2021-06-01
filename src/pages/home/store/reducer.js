import {fromJS} from 'immutable'

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
  recommendList:[{
    id:1,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-daily-e6f6601abc495573ad37f2532468186f.png'
  },
  {
    id:2,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-club-aa8bdf19f8cf729a759da42e4a96f366.png'
  },
  {
    id:3,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png'
  },
  {
    id:4,
    imgUrl:'https://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png'
  }
  ]
})
 const reducer=(state = defaultState, action)=>{
  switch(action.type){
    default:break;
  }
  return state;
} 
export default reducer;