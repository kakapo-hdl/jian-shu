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
   width:240px;
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