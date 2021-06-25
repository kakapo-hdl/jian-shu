import React,{Component} from 'react'
import {
  DetailBody,
  DetailRight,
  DetailLeft,
  Header,
  WriterMsg,
  Content
} from './style';
import {connect} from 'react-redux'
import { actionCreator } from '../detail/store';
import {withRouter} from 'react-router-dom';
class Detail extends Component{
  render(){
    // console.log(this.props);
    const {title,content} = this.props;
    return(
      <DetailBody>
        <div className="detail-wrapper">
          <DetailRight>
            <Header>{title}</Header>
            <WriterMsg>
            </WriterMsg>
            <Content  dangerouslySetInnerHTML={{__html:content}}>

            </Content>
          </DetailRight>
          <DetailLeft>
         
          </DetailLeft>
        </div>
      </DetailBody>
    )
  }
  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }
}


const mapState = (state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})
const mapDispatch = (dispatch)=>({
    getDetail(id){
      dispatch(actionCreator.getDetail(id))
    }   
})
export default connect(mapState,mapDispatch)(withRouter(Detail)) ;
