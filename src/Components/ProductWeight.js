import React from "react";

class ProductWeight extends React.Component {
  constructor() {
    super();

    this.state = {
      isClick: false,
    };
  }
  render() {
    return (
      <React.Fragment>
        <img
          className="item-top__weigher"
          src={
            this.state.isClick
              ? "./src/img/icons/weigher_click.png"
              : "./src/img/icons/weigher.png"
          }
          alt="weigher"
          onClick={() => {
            this.setState({ isClick: !this.state.isClick });
          }}
        />
      </React.Fragment>
    );
  }
}

export default ProductWeight;
