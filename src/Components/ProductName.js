import React from "react";

class ProductName extends React.Component {
  render(props) {
    const { title, description } = this.props;
    return (
      <div className="item-name">
        <h2 className="item__title">{title}</h2>
        <p className="item__description">{description}</p>
      </div>
    );
  }
}

export default ProductName;
