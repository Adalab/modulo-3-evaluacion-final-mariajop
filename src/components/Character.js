import React from 'react';
import { Link } from 'react-router-dom';

const Character = (props) => {
  return (
    <Link to={`/character/${props.id}`}>
      <article className="card">
        <h3 className="card__name">{props.name}</h3>
        <img src={props.image} className="card__img" alt={props.name} />
        <div className="card__info">
          <span className="card__species">Species: {props.species}</span>
          <span className="card__status">Status: {props.status}</span>
        </div>
      </article>
    </Link>
  );
};

export default Character;
