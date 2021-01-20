import React from "react";
import ProductCapacityRadio from "./ProductCapacityRadio.js";

class ProductCapacity extends React.Component {
  constructor(props) {
    super();
    console.log("ProductCapacity->constructor", props);
    this.state = {
      capacity: props.defaultСapacity,
    };
  }

  changeCapacity = (capacity) => {
    console.log("changeCapacity ", capacity);
    this.setState({ capacity });
  };

  render(props) {
    const { cataloguePrice, changePrice } = this.props;
    console.log(this.props);
    return (
      <div class="capacity-wrapper">
        {cataloguePrice.map((item) => (
          <ProductCapacityRadio
            item={item}
            defaultСapacity={this.state.capacity}
            changeCapacity={this.changeCapacity}
            changePrice={changePrice}
          />
        ))}
      </div>
    );
  }
}

export default ProductCapacity;
