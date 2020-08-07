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
  return <section className="characters">{htmlCode}</section>;
};

export default CharacterList;
