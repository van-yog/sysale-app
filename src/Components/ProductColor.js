import React from "react";
import ColorsItem from "./ColorsItem.js";

class ProductColor extends React.Component {
  constructor() {
    super();

    this.state = {
      color: "Цвет",
    };
  }

  setColor = (color) => {
    this.setState({ color });
  };

  render(props) {
    const { colors } = this.props;
    return (
      <div className="item-color-wrapper">
        <div className="item-color">
          <p className="item-color__visible">{this.state.color}</p>
          <div className="item-color__hidden">
            {colors.map((color) => (
              <ColorsItem color={color} setColor={this.setColor} />
            ))}
          </div>
        </div>
        <img
          className="item-color__img"
          src="./src/img/icons/arrow.png"
          alt="arrow"
        />
      </div>
    );
  }
}

export default ProductColor;
