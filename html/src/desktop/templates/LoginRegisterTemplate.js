import React, { Component } from 'react';
import { Row, Col } from 'antd';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ShortCut from '../components/ShortCut';

export default class LoginRegisterTemplate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandMiniCart: false,
      miniCartLoaded: false,
      delete_number:0,
      height:'100%',
    }
  }

  //添加购物车
  handleExpandMiniCart() {
    this.setState({
      expandMiniCart: true,
      miniCartLoaded: false
    })
  }

  //购物车删除迷你购物车实时更新
  handleDeleteCart(count){
    this.setState({
      delete_number:count,
      miniCartLoaded: false
    })
  }

  //迷你购物车刷新时间
  selectMiniCart(){
    this.setState({
      expandMiniCart: false
    })
  }

  /*setFooterHeight(){
    var body=document.body.offsetHeight;
    let center = this.refs.bb.offsetHeight,
        header = this.refs.header.state.headerTop,
        footer = this.refs.footer.state.footerBottom;
    let middle=body - header - footer;
    if(center < middle){
        this.setState({
          height:body - header - footer - 42
        })
    }
  }*/

  componentDidMount(){
    var body=document.body.offsetHeight;
    let center = this.refs.bb.offsetHeight,
        middle = body - 125 - 80;
        if(center < middle){
          this.setState({
            height:body - 125 - 80
          })
        }
  }

  render() {
    let { main } = this.props;
    return (
      <div className="registerLayout">
        <ShortCut location={this.props.location}
                  expandMiniCart={this.state.expandMiniCart}
                  miniCartLoad = {this.state.miniCartLoaded}
                  delete_number={this.state.delete_number}
                  selectMiniCart={()=>{this.selectMiniCart()}}
                  onMiniCartLoad={()=>{this.setState({miniCartLoaded:true})}}
                  numClear={()=>{this.setState({delete_number:0})}}
        ></ShortCut>
        <Header ref="header"></Header>
        <div id="login-register-page-wrapper" style={{background:'url("../images/registerBg.png")',backgroundSize:'100%',height:this.state.height}} ref='bb'>
          <div className="content">
            <Row>
              <Col span={16} className="regLeft">
                <img src="images/register/registerLeft.png"></img>
              </Col>
              <Col span={8} className="regFlex">
                {main}
              </Col>
            </Row>
          </div>
        </div>
        <Footer ref='footer'></Footer>
      </div>
    )
  }
}
