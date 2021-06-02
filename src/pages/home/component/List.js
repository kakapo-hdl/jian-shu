import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ListItem,
  ListMessage
} from '../style'
class List extends Component {
  render() {
    const {List} = this.props;
    // console.log(List);
    return (
      <div>
        {

        List.map(item =>{
        return(
        <ListItem key={item.get('id')}>
          <ListMessage>
            <h3 className="title">{item.get('title')}</h3>
            <p className="content">{item.get('content')}</p>
          </ListMessage>
          <img alt='' className="pic" src={item.get('imgUrl')}></img>
        </ListItem>)}
        )
        }
      </div>

    )
  }
}
const mapState = (state) => ({
  List: state.getIn(['home','articleList'])
})
export default connect(mapState, null)(List);