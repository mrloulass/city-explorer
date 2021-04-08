import React from 'react';
import Container from 'react-bootstrap/Container';

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class CityForm extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.textInput = React.createRef();
  // }

  formInput = (e) => {
    e.preventDefault();
    this.props.searchhandle(e.target.value);
  }
  render() {
    return (
      <Container>
        <Form>
          <Form.Group controlId="City Form">
            <Form.Label>Let's Explore a City</Form.Label>
            <Form.Control as="input"></Form.Control>
          </Form.Group>
          <Button className="explore_button" variant="info" type="submit" onChange={this.formInput}>Explore!</Button>
        </Form>
      </Container>
    )
  }
}

export default CityForm;
