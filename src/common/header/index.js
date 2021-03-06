import React, {Component}from 'react'
import { CSSTransition } from 'react-transition-group';
import {connect} from 'react-redux';
import { actionCreators } from './store';
import { actionCreator as loginActionCreators } from '../../pages/login/store';

import {Link,withRouter } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  SearchInfoList,
  Addition,
  Button,
  SearchWrapper
} from './style';


// function HeaderView() {
//   const location = useLocation();
//   console.log(location.pathname);
//   return <span>Path : {location.pathname}</span>
// }
class Header extends Component {
   getListArea(){      
    const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props;
    const pageList = [];
    const newList = list.toJS();
    if(newList.length) {
      for(let i = (page-1)*10 ; i < page*10; i++ ){
        if(newList[i] !==undefined) pageList.push(<SearchInfoItem key={i}>{newList[i]}</SearchInfoItem>)
      }
    }
    if(focused || mouseIn){
      return(
      <SearchInfo onMouseEnter={()=>{ handleMouseEnter() }} onMouseLeave={()=>{ handleMouseLeave() }}>
      <SearchInfoTitle>
        热门标题
        <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>     
        <i ref={(icon=>{this.spinIcon = icon})} className={'iconfont spin'}>&#xe851;</i>
          换一批
        </SearchInfoSwitch>
      </SearchInfoTitle>
      <SearchInfoList>
        {
          pageList
         }
      </SearchInfoList>
    </SearchInfo>)
    }
    return null;
  }
  render(){
    const {focused,logout,handleBlur,handleFocus,list,login} = this.props;
    console.log('header',this.props.location);
    return (
      <div style={{position:'fixed',width:'100%',borderBottom:'1px solid #f0f0f0',height:56}}>
      <HeaderWrapper>
        <Link to="/">
          <Logo></Logo> 
        </Link>

               
        <Addition>
          <Button className={'red'}>注册</Button>
          <Button className={'writting'}>
            <i className={"iconfont"}>&#xe615;</i>
            写文章</Button>
        </Addition>
        <Nav>
        <Link to="/">
          <NavItem className={'left active'}>首页</NavItem>
          </Link>
          <NavItem className={'left'}>下载App</NavItem>
          {
            login ? 
            <NavItem onClick={()=>logout()} className={'right'}>退出</NavItem>:
            <Link to="/login">
            <NavItem className={'right'}>登陆</NavItem>
            </Link>
          }

          <NavItem className={'right'}>
            <i className={"iconfont"}>&#xe636;</i>
          </NavItem>  
          <SearchWrapper>
            <CSSTransition
            in={focused}
            timeout={200}
            classNames={'slide'}
            >
            <NavSearch onFocus={()=>handleFocus(list)}
              onBlur={handleBlur}
              className={focused ? 'focused' : 'unfocused'}>
            </NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom'  : 'iconfont zoom'}>&#xe667;</i>
            {this.getListArea()}
            </SearchWrapper>
        </Nav>
 
      </HeaderWrapper></div>
    )
  }
}
const mapStateToprops=(state)=>{
    return{
     focused: state.get('header').get('focused'),
     totalPage:state.get('header').get('totalPage'),
     list: state.get('header').get('list'),
     page: state.get('header').get('page'),
     mouseIn: state.get('header').get('mouseIn'),
     login: state.get('login').get('login')
    }
  }
  const mapDispthToprops=(dispatch)=>{
    return{
      handleFocus(list){
        (list.size === 0) && dispatch(actionCreators.getList());
        dispatch(actionCreators.searchFocus())
      },
      handleBlur(){
        dispatch(actionCreators.searchBlur())
      },
      handleMouseEnter(){
        dispatch(actionCreators.mouseEnter())
      },
      handleMouseLeave(){
        dispatch(actionCreators.mouseLeave())
      },
      handleChangePage(page,totalPage,icon){
        let originAngle = icon.style.transform.replace(/[^0-9]/ig,'')
        originAngle = originAngle ? parseInt(originAngle,10) : 0; 
        icon.style.transform=`rotate(${originAngle+360}deg)`
        if(page < totalPage){
          dispatch(actionCreators.changePage(page+1))
        }else{
          dispatch(actionCreators.changePage(1))
        }
      },
      logout(){
        dispatch(loginActionCreators.logout())
      }
    }
  }
export default connect(mapStateToprops,mapDispthToprops)(Header);