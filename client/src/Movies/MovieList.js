import React from 'react';
import {Link, useRouteMatch, useParams} from 'react-router-dom';

export default function MovieList(props) {
  const { url } = useRouteMatch();
  console.log(url);
  let {id} = useParams();
  console.log(id);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <Link to={`${url}movies/${movie.id}`}style={{textDecoration: 'none', color: 'black'}}>
          <MovieDetails key={movie.id} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

function MovieDetails(props) {
  const { title, director, metascore } = props.movie;

  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}
