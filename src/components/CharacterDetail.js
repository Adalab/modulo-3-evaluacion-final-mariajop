import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const handleModalClick = (event) => {
    event.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal">
        <div className="modal__content" onClick={handleModalClick}>
          <header className="modal__header">
            <Link to="/">
              <span className="modal__close">CLOSE</span>
            </Link>
          </header>
          <section className="modal__container">
            <img className="modal__img" src={props.image} alt={props.name} />
            <h2 className="modal__name">{props.name}</h2>
            <ul className="modal__info">
              <li>Species: {props.species}</li>
              <li>Planet of origin: {props.origin} </li>
              <li>Episodes: {props.episode.length} </li>
              <li>Status: {props.status}</li>
            </ul>
          </section>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetail;
