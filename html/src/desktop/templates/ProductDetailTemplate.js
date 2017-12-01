import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductDetail from '../containers/ProductDetail';

export default class ProductDetailTemplate extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="content">
          <section>
            <ProductDetail {...this.props}></ProductDetail>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
