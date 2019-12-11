import React,{ Component } from "react";

import './index.less'

import Header from '../../components/Header'
import HeaderNav from '../../components/HeaderNav'

class Admin extends Component{
  render(){
    return (
      <div id="miChengProject">
        <div>
          <Header/>
          <HeaderNav/>
        </div>
        <div id="miChengContent">
          <div className="contentBoardHeart">
            <div className="subject">
              <div className="subjectHeader">
                <p>达人推荐</p>
                <p>More</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Admin;