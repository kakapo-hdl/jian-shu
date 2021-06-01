import React,{Component} from 'react'
import {
  WriterWrapper,
  WriterHeader
}   
from '../style'
class Writer extends Component{
  render(){
    return(
      <WriterWrapper>
        <WriterHeader>
          <span>推荐作者</span>
          <span><i  className={'iconfont spin'}>&#xe851;</i>换一批</span>
        </WriterHeader>
        {/* <WriterItem>
          <img></img>
          <WiterName>
            <span>sxxx日记</span>
            <span>关注</span>
          </WiterName>
        </WriterItem>
        <ShowMore>查看全部</ShowMore> */}
      </WriterWrapper>
    )
  }
}

export default Writer;