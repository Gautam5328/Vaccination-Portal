import React from "react";

import Cards from "./Cards/Cards";
import DisplayChart from "./Chart/Chart";
import CountryPicker from "./CountryPicker/CountryPicker";

import styles from "./CovidDisplayData.module.css";
import { fetchData } from "./api";

class CovidDisplayData extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country });
  };
  render() {
    const { data, country } = this.state;
    return (
      <div >
        {/* <Cards data={data} country={country} />
        <CountryPicker handleCountryChange={this.handleCountryChange} /> 
         <DisplayChart data={data} country={country} /> */}
         <Cards data={data} country={country}/>
         <DisplayChart data={data} country={country} />
      </div>
    );
  }
}

export default CovidDisplayData;
