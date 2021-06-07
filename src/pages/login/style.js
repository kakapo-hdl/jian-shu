import style from 'styled-components'

export const LoginWrapper = style.div`
   z-index:0;
   position:absolute;
   left:0;
   right:0;
   bottom:0;
   top:56px;
   background:#eee;
   display:flex;
   justify-content: center;
   align-items: center;
`;
export const LoginBox = style.div`
width:400px;
  height:200px;
  padding-top:20px;
  background:#fff;
  box-shadow:0 0 8px rgba(0,0,0,.1)
`;
export const Input = style.input`
  display:block;
  width:200px;
  height:30px;
  line-height:30px;
  padding:0 10px;
  margin:10px auto;
  color:#777;
  outline:none;
`
export const Button = style.div`
  cursor:pointer;
  width:220px;
  height:30px;
  line-height:30px;
  color:#fff;
  background:#3194d0;
  border-radius: 15px;
  margin:10px auto;
  text-align:center;
`

