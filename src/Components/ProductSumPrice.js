import React from "react";

class ProductSumPrice extends React.Component {
  render(props) {
    return <div className="item-sum-price"> {this.props.sum} грн </div>;
  }
}

export default ProductSumPrice;
