import React from "react";

class ProductLabel extends React.Component {
  render(props) {
    let label = this.props.label;
    return <span className="top__label">{label}</span>;
  }
}

export default ProductLabel;
