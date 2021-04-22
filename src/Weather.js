import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import WeatherDay from './WeatherDay.js';

class Weather extends React.Component {
  render() {
    let renderList = this.props.weatherData.map((day, index) => (
      <WeatherDay key={index} description={day.description} date={day.date}/>
    ))
    return (
      <>
        <ListGroup>
          {renderList}
        </ListGroup>
      </>
    );
  }
}

export default Weather;
