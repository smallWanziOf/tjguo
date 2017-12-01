import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Cart from '../containers/Cart';

export default class CartTemplate extends Component {

  render() {
    return (
      <div>
        <Header></Header>
        <div className="content">
          <section>
            <Cart {...this.props}></Cart>
          </section>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}