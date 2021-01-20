import React from "react";

class ProductImg extends React.Component {
  render(props) {
    const { imgPath, imgName } = this.props;

    return (
      <div className="item-top__img">
        <img src={imgPath + imgName + ".jpg"} alt="img" />
        <img
          className="item-top__img-hover"
          src={`${imgPath + imgName}_zoom.jpg`}
          alt="img"
        />
      </div>
    );
  }
}

export default ProductImg;
