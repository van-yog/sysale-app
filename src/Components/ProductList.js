import React from "react";
import ProductItem from "./ProductItem";

class ProductList extends React.Component {
  render(props) {
    const { products } = this.props;

    return (
      <div className="product-list">
        {products.map((elem) => (
          <ProductItem product={elem} key={elem.id} />
        ))}
      </div>
    );
  }
}

export default ProductList;
