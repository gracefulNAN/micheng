import React,{ Component } from "react";

import './index.less'

class Header extends Component{
  render(){
    return (
      <div id="headerContainer">
        <div className="headerBoardHeart"> 
          <h1>
            <img src="https://static.ofashion.com.cn/resource/pc/prod/dist/static/img/logo.a73bf4c.png" alt="logo"/>
          </h1>
          <div className="codeSearch">
            <div>
              <div>
                下载迷橙APP享全球潮品
              </div>
              <div>
                <i className="iconfont icon-ico"></i>
              </div>
            </div>
            <div>
              <div className="headerSearch">
                <input type="text" placeholder="搜索" />
              </div>
              <div>
                <i className="iconfont icon-fangdajing"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Header;