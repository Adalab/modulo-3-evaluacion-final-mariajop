import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const handleModalContentClick = (event) => {
    event.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal__content" onClick={handleModalContentClick}>
        <header className="modal__header">
          <h2 className="modal__title">{props.name}</h2>
          <Link to="/">
            <span className="modal__close">CLOSE</span>
          </Link>
        </header>
        <section>
          <img className="card__img" src={props.image} alt={props.name} />
          <ul>
            <li>Species: {props.species}</li>
            <li>Status: {props.status}</li>
          </ul>
        </section>
      </div>
    </Link>
  );
};

export default CharacterDetail;
