import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";

import { fetchCountries } from "../../service";

import styles from "./Countrypicker.module.css";

const Countries = ({ handleCountryChange }) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setCountries(await fetchCountries());
    };

    fetchAPI();
  }, []);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(evt) => handleCountryChange(evt.target.value)}
      >
        <option value="">World Infected Covid Data</option>
        {countries.map((country, idx) => (
          <option key={idx} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default Countries;
