import React,{Component} from 'react'
import {connect} from 'react-redux'
import Topic from './component/Topic'
import List from './component/List'
import Recommend from './component/Recommend'
import Writer from './component/Writer'
import QrCode from './component/QrCode'
import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'
import axios from 'axios'
import { actionCreator } from './store'

class Home extends Component{
  handleScrollTop(){
    window.scrollTo(0,0);
  }
  render(){
    const {showScroll} = this.props
    return(
      <HomeWrapper>
        <HomeLeft>
          <img alt={'...'} className={'banner-image'} src={'https://img.iplaysoft.com/wp-content/uploads/2019/free-images/free_stock_photo.jpg'}></img>
          <Topic>
          </Topic>
          <List></List>
        </HomeLeft> 
        <HomeRight>
          <Recommend></Recommend>
          <QrCode></QrCode>
          <Writer></Writer>
        </HomeRight> 
        { showScroll ? (          
        <BackTop onClick = {this.handleScrollTop}>顶部</BackTop>)
         :null
        }
      </HomeWrapper>
    )
  }  
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

  componentDidMount(){
    this.bindEvents();
    axios.get('/api/home.json').then(res=>{
      const result = res.data.data;
      const action={
        type:'change_home_data',
        topicList:result.topicList,
        articleList:result.articleList,
        recommendList:result.recommendList,
        recommendWrite:result.recommendWrite
      }
      this.props.changeHomeData(action)
    })
  }
}
const mapDispatch=(dispatch)=>({
  changeHomeData(action){
    dispatch(action)
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 450){
      dispatch(actionCreator.toggleTopShow(true))
    }else{
      dispatch(actionCreator.toggleTopShow(false))
    }
  }
})
const mapState = (state) => ({
  showScroll: state.getIn(['home','showScroll'])
})
export default connect(mapState,mapDispatch)(Home);
