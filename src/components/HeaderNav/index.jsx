import React,{ Component } from "react";
import { NavLink } from "react-router-dom"

import './index.less'

class HeaderNav extends Component{
  render(){
    return (
      <div id="navContainer">
        <div className="navBoardHeart">
          <ul>
            <li>
              <NavLink to="/" className="navList">首页</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">品牌</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">服装</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">箱包</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">鞋履</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">配饰</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">美妆</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">腕表</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">首饰</NavLink>
            </li>
            <li>
              <NavLink to="/" className="navList">生活</NavLink>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default HeaderNav;