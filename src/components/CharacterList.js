import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    return (
      <Character
        key={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
        id={character.id}
      />
    );
  });
  return (
    <div className="character__container">
      <section className="characters">{htmlCode}</section>
    </div>
  );
};

export default CharacterList;
