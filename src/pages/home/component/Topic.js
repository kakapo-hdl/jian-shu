/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{Component} from 'react'
import { connect } from 'react-redux'
import {
  TopicWrapper,
  TopicItem,
  MoreTopic
}   
from '../style'
class Topic extends Component{
  render(){
    const { topicList } = this.props;
    return(
      <TopicWrapper>
        {
          topicList.map( item => {
            return (<TopicItem key={item.get('id')} ><img className="topic-image" alt={'...'} src={item.get('imgUrl')}></img>{item.get('title')}</TopicItem>)
          })
        }
        <MoreTopic>{'更多热门专题 >'}</MoreTopic>
        </TopicWrapper>
    )
  }
}
const mapState = (state) =>({ 
  topicList: state.get('home').get('topicList')
})

export default connect(mapState,null)(Topic);