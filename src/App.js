import React from "react";
import "./style.css";
import ProductList from "./Components/ProductList.js";
import Loader from "./Components/Loader.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: [],
      isDownload: false,
    };
  }

  componentDidMount() {
    const fetchProducts = [
      {
        id: 1,
        title: "Шампунь",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        label: "New",
        imgPath: "./src/img/",
        imgName: "shampoo_1",
        color: ["бирюзовый", "каштановый", "желтый", "красный", "зеленый"],
        defaultСapacity: 100,
        defaultPrice: 200,
        cataloguePrice: [
          { capacity: 100, price: 200 },
          { capacity: 200, price: 350 },
          { capacity: 300, price: 500 },
        ],
      },
      {
        id: 2,
        title: "Шампунь",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        label: "New",
        imgPath: "./src/img/",
        imgName: "shampoo_2",
        color: ["желтый", "красный", "зеленый", "голубой", "малиновый"],
        defaultСapacity: 160,
        defaultPrice: 150,
        cataloguePrice: [
          { capacity: 80, price: 100 },
          { capacity: 160, price: 150 },
          { capacity: 240, price: 200 },
        ],
      },
      {
        id: 3,
        title: "Шампунь",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        label: "Sale",
        imgPath: "./src/img/",
        imgName: "shampoo_3",
        color: ["желтый", "красный", "зеленый", "абрикосовый", "морская волна"],
        defaultСapacity: 300,
        defaultPrice: 600,
        cataloguePrice: [
          { capacity: 100, price: 300 },
          { capacity: 200, price: 450 },
          { capacity: 300, price: 600 },
        ],
      },
    ];

    setTimeout(() => {
      this.setState({ products: fetchProducts, isDownload: true });
    }, 1000);
  }

  render() {
    return (
      <div className="App">
        <h1 className="name">Ivan Kharchenko</h1>
        <div className="loader">{!this.state.isDownload ? <Loader /> : ""}</div>
        <ProductList products={this.state.products} />;
      </div>
    );
  }
}

export default App;
