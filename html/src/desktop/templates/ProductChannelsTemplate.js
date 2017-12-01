import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductChannels from '../containers/ProductChannels';

export default class ProductListTemplate extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="content">
          <section>
            <ProductChannels {...this.props}></ProductChannels>
          </section>
        </div>
        <div style={{height:'300px',clear:'both'}}></div>
        <Footer></Footer>
      </div>
    );
  }
}
