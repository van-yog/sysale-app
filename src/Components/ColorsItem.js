import React from "react";

class ColorsItem extends React.Component {
  render(props) {
    const { color, setColor } = this.props;
    console.log(color);
    return (
      <p onClick={() => setColor(color)} className="item-color__text">
        {color}
      </p>
    );
  }
}

export default ColorsItem;
