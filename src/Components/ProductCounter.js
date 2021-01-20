import React from "react";

class ProductCounter extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 1,
    };
  }

  render() {
    return (
      <div className="counter">
        <button
          className="counter__minus-btn"
          type="button"
          onClick={() => {
            let { count } = this.state;
            count -= 1;
            if (!count) count = 1;
            this.setState({ count });
            this.props.changeCounter(count);
          }}
        >
          <img
            className="counter__minus-img"
            src="./src/img/icons/minus.png"
            alt="minus"
          />
        </button>

        <p className="counter__text">{this.state.count}</p>

        <button
          className="counter__plus-btn"
          type="button"
          onClick={() => {
            let { count } = this.state;
            count += 1;
            this.setState({ count });
            this.props.changeCounter(count);
          }}
        >
          <img src="./src/img/icons/plus.png" alt="plus" />
        </button>
      </div>
    );
  }
}

export default ProductCounter;
