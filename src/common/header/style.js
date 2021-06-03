import style from 'styled-components'
import logoPic from '../../statics/header-logo.png'
export const HeaderWrapper = style.div`
// position: fixed;
// right: 0;
// left: 0;
  // position:relative;
  height:56px;
  border-bottom:1px solid #f0f0f0;
  background:#fff;
`;

export const Logo = style.a`
  display:block;
  position:absolute;
  top:0;
  left:0;
  width:100px;
  height:56px;
  background:url(${logoPic});
  background-size:contain;
`;

export const Nav = style.div`
  width:960px;
  height:100%;
  padding-right:70px;
  box-sizing:border-box;
  margin:0 auto;
`;
export const NavItem = style.div`
  line-height:56px;
  font-size:17px;
  padding:0 15px;
  color:#333;
  &.left {
    float:left;
  }
  &.right {
    float:right;
    color:#969696;
  }
  &.active {
    color:#ea6f5a;
  }
`;
export const NavSearch = style.input.attrs({
  placeholder:'搜索'
})`
  width:160px;
  height:38px;
  border:none;
  padding:0 36px 0 20px;
  box-sizing:border-box;
  font-size:14px;
  outline:none;
  border-radius:18px;
  margin-top:9px;
  background:#eee;
  color:#666
  &::placeholder{
    color:#999
  }
  &.focused {
    width:240px;
  }
  &.slide-enter {
    transition:all .2s ease-out;
  }
  &.slide-enter-active {
    width:240px;
  }
  &.slide-exit {
    transition:all .2s ease-out;
  }
  &.slide-exit-active {
    width:160px;
  }
`;
export const SearchInfo = style.div`
  position:absolute;
  left:0;
  top:56px;
  width:240px;
  padding:0 20px;
  min-height:100px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);  background:#fff
`;
export const SearchInfoTitle = style.div`
  margin-top:20px;
  margin-bottom:15px;
  line-height:20px;
  font-size:14px;
  color:#969696
`;
export const SearchInfoSwitch = style.span`
  float:right;
  font-size:13px;
  cursor:pointer;
  .spin{
    //需要block 样式才能旋转
    display:block;
    float:left;
    font-size:12px;
    margin-right:3px;
    transition:all .2s ease-in;
    transform: rotate(0deg);
    transform-origin: center;
  }
`;
export const SearchInfoItem = style.a`
  line-height:20px;
  float:left;
  display:block;
  padding:0 5px;
  font-size:12px;
  border:1px solid #ddd;
  color:#969696;
  border-radius:3px;
  margin: 0 10px 15px 0;
`;
export const SearchInfoList= style.div`
  overflow:hidden;
`;
export const Addition = style.div`
  position:absolute;
  right:0;
  top:0;
  height:56px;
`;
export const Button = style.button`
  float:left;
  margin-top:9px;
  right:0;
  top:0;
  line-height:38px;
  border-radius:19px;
  border:1px solid #ec6149;
  padding: 0 20px;
  margin-right:20px;
  font-size:14px;
  &.red{
    color:#ec6149;
    background:#fff;
  }
  &.writting{
    color:#fff;
    background:#ec6149;
  }
`;
export const SearchWrapper = style.div`
  position:relative;
  float:left;
  .zoom {
    position:absolute;
    right:5px;
    bottom:4px;
    width:30px;
    line-height:30px;
    text-align:center;
    border-radius:15px;
    cursor:pointer;
    &.focused {
      background:#777;
      color:#fff;
    }
  }
`