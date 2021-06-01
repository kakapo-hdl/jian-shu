import React,{Component} from 'react'
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
}

export default Home;