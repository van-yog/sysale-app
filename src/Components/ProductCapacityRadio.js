import React from "react";

class ProductCapacityRadio extends React.Component {
  constructor(props) {
    super();
    console.log("ProductCapacityRadio->constructor->props", this.props);
  }

  render(props) {
    const { item, defaultСapacity, changeCapacity, changePrice } = this.props;
    return (
      <div
        className="radio"
        onClick={() => {
          changeCapacity(item.capacity);
          changePrice(item.price);
        }}
      >
        <div className="radio-input">
          <span
            className={
              item.capacity === defaultСapacity ? "radio-input-checked " : ""
            }
          ></span>
        </div>
        <div className="radio-capacity">{item.capacity} мл</div>
      </div>
    );
  }
}

export default ProductCapacityRadio;
