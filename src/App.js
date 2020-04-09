import React from "react";

import Cards from "./components/Cards";
import CountryPicker from "./components/CountryPicker";

import { fetchData } from "./service";
import styles from "./App.module.css";

import image from "./images/covid.jpg";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data } = this.state;

    return (
      <div className={styles.container}>
        <img className={styles.image} src={image} alt="COVID-19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
      </div>
    );
  }
}

export default App;
