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
        { showScroll ? (          
        <BackTop onClick = {this.handleScrollTop}>顶部</BackTop>)
         :null
        }
      </HomeWrapper>
    )
  }  
  componentDidMount(){
    this.bindEvents();
  }
  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }

}
const mapDispatch=(dispatch)=>({
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