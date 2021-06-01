import style from 'styled-components'

export const HomeWrapper = style.div`
  width:960px;
  margin:0 auto;
  overflow:hiddenl
`;

export const HomeLeft = style.div`
  float:left;
  margin-left:15px;
  padding-top:30px;
  width:625px;
  .banner-image{
    width:100%;
    height:270px;
  }
`;

export const HomeRight = style.div`
  float:left; 
  width:280px;
  margin-left:15px;
  padding-top:30px;
`;
export const TopicWrapper =style.div`
  padding: 20px 0 10px 0;
  margin-left:-18px;
  overflow:hidden;
`;
export const TopicItem =style.div`
  float: left;
  height:32px;
  margin-left:18px;
  margin-bottom:15px;
  padding-right:10px;
  line-height:32px;
  font-size:14px;
  color:#000
  background:#f7f7f7;
  border:1px solid #dcdcdc;
  border-radius:4px;
  border-bottom:1px solid #dcdcdc;
  .topic-image{
    display:block;
    float:left;
    margin-right:10px;
    height:32px;
    width:32px;
  }
`;
export const MoreTopic =style.div`
  float:left;
  height:32px;
  font-size:14px;
  line-height:32px;
  margin-left:18px;
  cursor:pointer;
  color: #D4D4D4;
`;
export const ListItem = style.div`
padding:20px 0;
border-bottom:1px solid #dcdcdc;
overflow:hidden;
  .pic {
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;
  }
`;

export const ListMessage = style.div`
  width:500px;
  float:left;
  padding-right:15px;
  box-sizing: border-box;
  .title {
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;
  }
  .content {
    line-height:18px;
    font-size:13px;
  }
`;

export const RecommendWrapper = style.div`
  width:280px;
`;
export const RecommendItem = style.a`
  display:block;
  width:100%;
  min-height: 50px;
  margin-bottom:6px;
  cursor:pointer;
  border-radius:4px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
`;