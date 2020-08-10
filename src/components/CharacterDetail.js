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
          <header className="modal__header"></header>
          <section className="modal__container">
            <img className="modal__img" src={props.image} alt={props.name} />
            <div className="modal__info">
              <h2 className="modal__name">{props.name}</h2>
              <ul>
                <li>
                  <strong>Species: </strong>
                  {props.species}
                </li>
                <li>
                  <strong>Planet of origin: </strong>
                  {props.origin}{' '}
                </li>
                <li>
                  <strong>Episodes: </strong>
                  {props.episode.length}{' '}
                </li>
                <li>
                  <strong>Status: </strong>
                  {props.status}
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </Link>
  );
};

export default CharacterDetail;
