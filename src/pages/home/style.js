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
  margin-left:40px;
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
    cursor:pointer;
    :hover{
      text-decoration:underline;
    }
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

export const QrCodeWrapper = style.div`
  box-sizing: border-box;
  overflow:hidden;
  width:100%;
  padding:10px 22px;
  border:1px solid #f0f0f0;
  background-color:#fff;
  border-radius:4px;
  margin-bottom:30px;
  cursor: pointer;
  .text-info{
    float:left;
    margin: auto 0;
    margin-left:8px;
    .text-title{
      margin-top:14px;
      font-size:15px;
      color:#333;
    }
    .text-content{
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
  > img{
    float:left;
    width:60px;
    height:60px;
    opacyty:.85;
  }
`;
export const WriterWrapper = style.div`
  width:100%;
  min-height:200px;
`;
export const WriterHeader = style.div`
  display:flex;
  justify-content:space-between;
  font-size: 14px;
  color: #969696;
  .iconfont{
    font-size:11px
  }
  .writer-change{
    cursor:pointer;
    :hover{
      color: #787878;
    }
  }
`;
export const WriterItem = style.div`
  margin-top:15px;
  height:48px;
  width:100%;
  .writer-desc{
    margin-top: 12px;
  font-size: 12px;
  color: #969696;
  }
`;
export const ItemImg = style.a`
  width:48px;
  height:48px;
  margin-right:10px;
  display:block;
  float:left;
  border-radius:24px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
  `
  export const WiterName = style.div`
    display:flex;
    padding-top:5px;
    justify-content:space-between;
    font-size:14px;
    color:#333;
    > span{
      cursor:pointer;
    }
    .add-care{
      font-size: 13px;
      color: #42c02e;
    }
  `;
  export const ShowMore = style.a`
    display:block;
    cursor:pointer;
    box-sizing: border-box;
    width:100%;
    height:35px;
    padding:9px 7px 7px 12px;
    border: 1px solid #dcdcdc;
    background:#f7f7f7; 
    text-align:center;
    margin-top:15px;
    border-radius:4px;
    font-size:13px;
    vertical-align:center;
    color:#787878;
  `;
  
