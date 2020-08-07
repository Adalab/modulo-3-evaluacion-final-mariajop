import React from 'react';
import { Link } from 'react-router-dom';

const CharacterDetail = (props) => {
  const handleModalContentClick = (ev) => {
    ev.preventDefault();
  };
  return (
    <Link to="/">
      <div className="modal">
        <div className="modal__dialog">
          <div className="modal__content" onClick={handleModalContentClick}>
            <header className="modal__header">
              <h2 className="modal__title">{props.name}</h2>
              <Link to="/">
                <span className="modal__close icon fas fa-times"></span>
              </Link>
            </header>
            <section>
              <img className="card__img" src={props.image} alt={props.name} />
              <ul className="ml-1 mt-1">
                <li>Species: {props.price}</li>
                <li>Status: {props.status}</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetail;
