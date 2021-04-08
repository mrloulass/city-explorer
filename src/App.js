import React from 'react';
import axios from 'axios';

import CityForm from './CityForm.js';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      awaitingToSearch: false,
      searchingForCity: '',
    };
  }

  searchResults = () => {
    this.setState({ awaitingToSearch: false });
  }

  searchHandle = async(searchingForCity) => {
    this.setState({
      awaitingToSearch: true,
      searchingForCity: searchingForCity
    });

    let cityLocationData = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${searchingForCity}&format=json`);
    console.log(cityLocationData);
  }



  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <CityForm>
          searchHandle={this.searchHandle}
        </CityForm>
      </div>
    );
  }
}

export default App;
