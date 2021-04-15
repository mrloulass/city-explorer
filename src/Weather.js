import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class Weather extends React.Component {
  render() {
    let renderList = this.props.weatherData.map((day, index) => (
      <ListGroup.Item key={index}> {day.description}: {day.date}</ListGroup.Item>
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
