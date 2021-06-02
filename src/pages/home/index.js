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
} from './style'
import axios from 'axios'

class Home extends Component{
  render(){
    return(
      <HomeWrapper>
        <HomeLeft>
          <img alt={'...'} className={'banner-image'} src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTjTD60zWocj-WIryJgZfDxQ6_K3AUDq0n2A&usqp=CAU'}></img>
          <Topic>

          </Topic>
          <List></List>
        </HomeLeft> 
        <HomeRight>

          <Recommend></Recommend>
          <QrCode></QrCode>
          <Writer></Writer>
        </HomeRight> 
      </HomeWrapper>
    )
  }
  componentDidMount(){
    axios.get('/api/home.json').then(res=>{
      const result = res.data.data;
      console.log(result);
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
const mapDispatch = (dispatch) =>({
  changeHomeData(action){
    dispatch(action)
  }
})
export default connect(null,mapDispatch)(Home);