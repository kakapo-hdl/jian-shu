import {createGlobalStyle }  from 'styled-components'

 const iconFontStyle= createGlobalStyle `
 @font-face {
  font-family: 'iconfont';  /* Project id 2578410 */
  src: url('//at.alicdn.com/t/font_2578410_uvq6mkf5mkf.woff2?t=1622378375564') format('woff2'),
       url('//at.alicdn.com/t/font_2578410_uvq6mkf5mkf.woff?t=1622378375564') format('woff'),
       url('//at.alicdn.com/t/font_2578410_uvq6mkf5mkf.ttf?t=1622378375564') format('truetype');
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.icon {
  width: 1em; height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}`

export default iconFontStyle;