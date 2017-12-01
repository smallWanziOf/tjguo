import React, { Component } from 'react';
import { Row, Col} from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollAnim from 'rc-scroll-anim';
const Element = ScrollAnim.Element;

export default class HeaderFooterTemplate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      height:'100%',
      backHeight:"",
    }
  }

  renderSection() {
    let { props } = this, sections = [];
    for(var name in props) {
      if(name.match('section')){
        let section = props[name],
        { slider, notice, business, sliderMid, financing, league ,height} = section.props;
        sections.push(
          <section ref="section" key={name} backHeight={this.state.backHeight} className={notice?'notice':slider?'slider':business?'business':sliderMid?'sliderMid':financing?'financing':league?'league':null}>{section}</section>
        )
      }
    }
    return sections;
  }

  setFooterHeight(){
    var body=document.body.offsetHeight;
    let header = this.refs.header.state.headerTop,
        footer = this.refs.footer.state.footerBottom,
        center = this.refs.section.offsetHeight;
    let middle=body - header - footer;
    let backHeight = this.refs.section.childNodes[0].childNodes[0].offsetHeight;
    if(center < middle){
        this.setState({
          height:body - header - footer,
          backHeight : body - header - footer
        })
    };
  }

  render() {
    return (
      <div>
        <Element id="Back_top" key="Back_top"></Element>
        <Header ref="header" setFooterHeight={::this.setFooterHeight}></Header>
          {
            this.renderSection()
          }
        <Footer ref='footer' setFooterHeight={::this.setFooterHeight}></Footer>
      </div>
    );
  }
}
