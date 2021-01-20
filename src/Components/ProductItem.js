import React from "react";
import ProductLabel from "./ProductLabel.js";
import ProductImg from "./ProductImg.js";
import ProductWeight from "./ProductWeight.js";
import ProductName from "./ProductName.js";
import ProductColor from "./ProductColor.js";
import ProductSumPrice from "./ProductSumPrice.js";
import ProductCounter from "./ProductCounter.js";
import ProductBuy from "./ProductBuy.js";
import ProductCapacity from "./ProductCapacity.js";

class ProductItem extends React.Component {
  constructor(props) {
    super();
    const defaultPrice = props.product.defaultPrice;

    this.state = {
      price: defaultPrice,
      count: 1,
      sum: defaultPrice,
    };
  }

  changeCounter = (count) =>
    this.setState({ count, sum: count * this.state.price });

  changePrice = (price) =>
    this.setState({ price, sum: price * this.state.count });

  render(props) {
    const { product } = this.props;

    return (
      <div className="product-wrapper">
        <div className="item-top">
          <ProductLabel label={product.label} />
          <ProductImg imgPath={product.imgPath} imgName={product.imgName} />
          <ProductWeight />
        </div>
        <ProductName title={product.title} description={product.description} />
        <div className="item-center">
          <ProductColor colors={product.color} />
          <ProductSumPrice sum={this.state.sum} />
        </div>
        <ProductCapacity
          cataloguePrice={product.cataloguePrice}
          defaultPrice={product.defaultPrice}
          defaultСapacity={product.defaultСapacity}
          changePrice={this.changePrice}
        />
        <div className="item-bottom">
          <ProductCounter changeCounter={this.changeCounter} />
          <ProductBuy />
        </div>
      </div>
    );
  }
}

export default ProductItem;
