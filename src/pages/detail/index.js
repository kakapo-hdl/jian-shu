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
import { actionCreator } from './store';
import { getDetailData } from './store/actionCreators';
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
    this.props.getDetail();
  }
}
const mapProps = (dispatch) => {
  return {
    getDetail(){
      dispatch(actionCreator.getDetailData())
    }
  }
}

const mapState = (state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})
export default connect(mapState,mapProps)(Detail) ;