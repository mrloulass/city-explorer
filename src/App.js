import React from 'react';
import axios from 'axios';

import './App.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      city: '',
      dataFromCity: {}
    };
  }

  submitForm = async (e) => {
    e.preventDefault();
    // console.log(this.state.city);
    let dataFromCity = await axios.get(`https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`);
    // console.log(dataFromCity);
    let firstCityData = dataFromCity.data[0];
    this.setState({
      dataFromCity: firstCityData
    })
  }

  render() {
    return (
      <div>
        <h1>City Explorer</h1>
        <Container>
          <Form onSubmit={this.submitForm}>
            <Form.Group controlId="city" >
              <Form.Label>Let's Explore Cities</Form.Label>
              <Form.Control value={this.state.city} onInput={e => this.setState({ city: e.target.value })} placeholder="Enter City Name"></Form.Control>
              <Button variant="info" type="submit">Explore!</Button>
            </Form.Group>
          </Form>
          {this.state.dataFromCity.lat !== undefined ? <Card bg="light" border="warning">
            <Card.Body>
              <Card.Title>{this.state.dataFromCity.display_name}</Card.Title>
              <Card.Text>{this.state.dataFromCity.lat}, {this.state.dataFromCity.lon} </Card.Text>
              <Card.Img variant="bottom" src={`https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.dataFromCity.lat},${this.state.dataFromCity.lon}&zoom=13`} alt={`Map of ${this.state.dataFromCity.display_name}`} ></Card.Img>
            </Card.Body>
          </Card> : ''}
        </Container>
      </div>
    );
  }
}

export default App;
