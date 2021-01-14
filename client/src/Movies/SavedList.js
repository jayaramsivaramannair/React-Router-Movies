import React from 'react';
import {Link, NavLink, useRouteMatch} from 'react-router-dom';

export default function SavedList(props) {
  const { url } = useRouteMatch();
  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {props.list.map(movie => (
        <NavLink to={`${url}movies/${movie.id}`} style={{color: 'black', textDecoration: 'none'}}>
          <span className="saved-movie" key={movie.id}>{movie.title}</span>
        </NavLink>
      ))}
      <Link to={"/"} style={{color: 'black', textDecoration: 'none'}}>
        <div className="home-button">Home</div>
      </Link>
    </div>
  );
}
