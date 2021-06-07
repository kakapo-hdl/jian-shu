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
<<<<<<< HEAD
import { actionCreator } from './store';
import { getDetailData } from './store/actionCreators';
=======
import { actionCreator } from '../detail/store';
>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
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
<<<<<<< HEAD
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

=======
    this.props.getDetail(this.props.match.params.id);
  }
}


>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
const mapState = (state)=>({
  title:state.getIn(['detail','title']),
  content:state.getIn(['detail','content'])
})
<<<<<<< HEAD
export default connect(mapState,mapProps)(Detail) ;
=======
const mapDispatch = (dispatch)=>({
    getDetail(id){
      dispatch(actionCreator.getDetail(id))
    }   
})
export default connect(mapState,mapDispatch)(Detail) ;
>>>>>>> 455fdd4c3131c05ef76d4c63bbfadb43a85a196e
