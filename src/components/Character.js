import React from 'react';

const App = (props) => {
  return (
    <article className="card">
      <img src={props.image} className="card__img" alt={props.name} />
      <h3 className="card__name">{props.name}</h3>
      <span className="card__species">{props.species}</span>
      <span className="card__status">{props.status}</span>
    </article>
  );
};

export default App;
