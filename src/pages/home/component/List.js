import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from '../store';
import {Link} from 'react-router-dom'
import {
  ListItem,
  ListMessage,
  LoadMore
} from '../style'
class List extends Component {
  render() {
    const {List,getMoreList,page} = this.props;
    return (
      <div>
        {
        List.map((item,index) =>{
          return(
   
        <ListItem>
          <ListMessage>
          <Link  key={index} to="/detail"> <h3 className="title">{item.get('title')}</h3> </Link>
              <p className="content">{item.get('content')}</p>
            </ListMessage>
            <img alt='' className="pic" src={item.get('imgUrl')}></img>
          </ListItem> 
       )})       
        }

        <LoadMore onClick={()=>getMoreList(page)}>更多内容</LoadMore>
      </div>

    )
  }
}
const mapState = (state) => ({
  List: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})
const mapDispatch = (dispatch) =>{
  return{
  getMoreList(page){
    dispatch(actionCreator.getMoreList(page))
  }
}
}
export default connect(mapState, mapDispatch)(List);