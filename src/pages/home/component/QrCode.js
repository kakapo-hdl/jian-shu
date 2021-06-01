import React,{Component} from 'react'
import {QrCodeWrapper} from '../style'
import qrcode from '../../../statics/qr-code.png'

class QrCode extends Component{
  render(){
    return(
      <QrCodeWrapper>
        <img alt="" src={qrcode}></img>
        <div className="text-info">
          <div className="text-title">下载简书手机App {'>'}</div>
          <div className="text-content">随时随地发现和创作内容</div>
        </div>
      </QrCodeWrapper>
    )
  }
}

export default QrCode;
