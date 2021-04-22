import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Movie from './Movie.js';

class Movies extends React.Component {
  render() {
    let movieList = this.props.movieData.map((infor, index) => (

      <Movie key={index} title={infor.title} overview={infor.overview} image_url={infor.image_url} />
    ))
    return (
      <>
        <ListGroup>
          {movieList}
        </ListGroup>
      </>
    );
  }
}
export default Movies;
