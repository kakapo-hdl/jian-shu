import {fromJS} from 'immutable'
import {constants} from './index'

const defaultState = fromJS({
  title:'男人 千万不能碰这四种女人',
  content:`<p><b>基本说来，作为炙手可热的明星，一旦有什么风吹草动，外界都会很快察觉，</b>然而赵丽颖和冯绍峰，两人结婚的消息来得猝不及防，离婚的消息也是。</p><p>基本说来，作为炙手可热的明星，一旦有什么风吹草动，外界都会很快察觉，然而赵丽颖和冯绍峰，两人结婚的消息来得猝不及防，离婚的消息也是。</p> <img alt="" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2837693275,770955883&fm=26&gp=0.jpg"/> <p>基本说来，作为炙手可热的明星，一旦有什么风吹草动，外界都会很快察觉，然而赵丽颖和冯绍峰，两人结婚的消息来得猝不及防，离婚的消息也是。</p> <p>基本说来，作为炙手可热的明星，一旦有什么风吹草动，外界都会很快察觉，然而赵丽颖和冯绍峰，两人结婚的消息来得猝不及防，离婚的消息也是。</p> <img alt="" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2837693275,770955883&fm=26&gp=0.jpg"/> `
})

const reducer= (state= defaultState,action ) => {
  switch(action.type){ 
    default: break ;
  }
  return state
}
export default reducer;