import style from 'styled-components'

export const DetailBody = style.div`
  background-color: #f9f9f9;
  .detail-wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: calc(100vh - 66px);
    padding-top: 10px;
    font-size: 16px;
  }
`;
//复习flex样式
export const DetailRight = style.div`
box-sizing: border-box;
  flex-shrink: 0;
  margin-bottom: 24px;
  margin-right: 10px;
  padding:32px;
  background-color: #fff;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 730px;
`

export const DetailLeft = style.div`
flex-shrink: 0;
width: 260px;
`

export const Header = style.h1`
  font-size: 30px;
  font-weight: 700;
  word-break: break-word;
  margin-bottom:15px;
`
export const WriterMsg = style.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 32px;
font-size: 13px;
`

export const Content = style.div`
  font-weight: 400;
  line-height: 1.8;
  margin-bottom: 20px;
  word-break: break-word;
  p {
    color:#404040;
    word-break:break-word;
    margin-bottom:20px;
  
   }
   img {
    max-height:450px;
    width:100%;
    margin-bottom:25px;
    cursor: zoom-in;
  }  
   b {
    font-weight:bold;
  }

`;
