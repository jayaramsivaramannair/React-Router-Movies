import React from 'react';
import { Link, useRouteMatch} from 'react-router-dom';

export default function SavedList(props) {
  const { url } = useRouteMatch();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <Link to={`${url}movies/${movie.id}`}style={{color: 'black', textDecoration: 'none'}}>
          <span className="saved-movie" key={movie.id}>{movie.title}</span>
        </Link>
      ))}
      <Link to={"/"} style={{color: 'black', textDecoration: 'none'}}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
