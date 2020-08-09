import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const handleModalContentClick = (event) => {
    event.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal" onClick={handleModalContentClick}>
        <header className="modal__header">
          <Link to="/">
            <span className="modal__close">CLOSE</span>
          </Link>
        </header>
        <section>
          <img className="card__img" src={props.image} alt={props.name} />
          <h2 className="modal__title">Name: {props.name}</h2>
          <ul>
            <li>Species: {props.species}</li>
            <li>Planet of origin: {props.origin} </li>
            <li>Episodes: {props.episode.length} </li>
            <li>Status: {props.status}</li>
          </ul>
        </section>
      </div>
    </Link>
  );
};

export default CharacterDetail;
