import NewSaleCard from '../components/NewSaleCard';
import ProductCard from '../components/ProductCard';
// import ProductLine from './components/ProductLine'
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { LoadProducts } from '../store/actions/ProductCardActions';
import { CreateSaleAction } from '../store/actions/SaleAction';


const mapStateToProps = ({ productCardState, saleState }) => {
  return { productCardState, saleState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProducts: () => dispatch(LoadProducts()),
    // pass something in if 1 isn't hardcoded in saleAction.js
    postSale: () => dispatch(CreateSaleAction())
  };
};

const Home = (props) => {
  useEffect(() => {
    props.fetchProducts();
  }, []);

const beginSale = () => {
  console.log("Another Sale started!")
  props.postSale();
}

  return (
    <div className="home-page">
      <div>Order</div>
      <button onClick={beginSale}>Begin Sale Transaction</button>
      <NewSaleCard />
      <div className="product-cont">
        {props.productCardState.products.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
