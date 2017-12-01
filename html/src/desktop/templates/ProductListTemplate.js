import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../containers/ProductList';

export default class ProductListTemplate extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="content">
          <section>
            <ProductList {...this.props}></ProductList>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}
