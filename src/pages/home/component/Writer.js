import React,{Component} from 'react'
import {connect} from 'react-redux'
import {
  WriterWrapper,
  WriterHeader,
  WriterItem,
  ItemImg,
  WiterName,
  ShowMore
}   
from '../style'
class Writer extends Component{
  render(){
    const {WriteList} = this.props;
    return(
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span className="writer-change"><i  className={'iconfont spin'}>&#xe851;</i>换一批</span>
        </WriterHeader>
        {WriteList.map(item=>{
          return(
            <WriterItem key={item.get('id')}>
            <ItemImg className='pic' alt='' imgUrl={item.get('imgUrl')}></ItemImg>
            <WiterName>
              <span>{item.get('title')}</span>
              <span className="add-care">+ 关注</span>
            </WiterName>
            <p className='writer-desc'>写了{(item.get('textNumber')/1000).toFixed(2)}k字 · {(item.get('like')/1000).toFixed(2)}k喜欢</p>
          </WriterItem>
          )})
        }
        <ShowMore>查看全部 {'>'}</ShowMore>
      </WriterWrapper>
    )
  }
}

const mapState = (state) =>({ 
  WriteList: state.get('home').get('recommendWrite')
})

export default connect(mapState,null)(Writer);