import React from "react";

import Cards from "./components/Cards";
import { fetchData } from "./service";
import styles from "./App.module.css";

import image from "./images/covid.jpg";

class App extends React.Component {
  state = {
    data: {},
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
      </div>
    );
  }
}

export default App;
