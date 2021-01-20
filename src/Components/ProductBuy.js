import React from "react";

class ProductBuy extends React.Component {
  constructor() {
    super();
    this.state = {
      isBuy: false,
    };
  }
  render() {
    return (
      <button
        className={
          this.state.isBuy ? "item-bottom__btn-buy" : "item-bottom__btn"
        }
        onClick={() => this.setState({ isBuy: !this.state.isBuy })}
      >
        Купить
      </button>
    );
  }
}

export default ProductBuy;
