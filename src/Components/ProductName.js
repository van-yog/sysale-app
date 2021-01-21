import React from "react";

class ProductName extends React.Component {
  render(props) {
    const { title, description } = this.props;
    return (
      <div className="name">
        <h2 className="name__title">{title}</h2>
        <p className="name__description">{description}</p>
      </div>
    );
  }
}

export default ProductName;
