import React,{Component} from 'react'
import {connect} from 'react-redux'
import {RecommendWrapper,RecommendItem} from '../style'
class Recommend extends Component{
  render(){
    const {List} = this.props
    return(
      <RecommendWrapper>
        {
      
        List.map(item=>{
          return(
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}/>
          )
        })}
      </RecommendWrapper>
    )
  }
}
const mapState = (state) =>({ 
  List: state.get('home').get('recommendList')
})
export default connect(mapState, null)(Recommend);