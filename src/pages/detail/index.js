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
}
const mapState = (state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})
export default connect(mapState,null)(Detail) ;