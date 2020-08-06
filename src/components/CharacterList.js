import React from 'react';
import Character from './Character';

const CharacterList = (props) => {
  const htmlCode = props.characters.map((character) => {
    console.log(character);
    return (
      <Character
        key={character.id}
        image={character.image}
        name={character.name}
        species={character.species}
        status={character.status}
      />
    );
  });
  return <section className="characters">{htmlCode}</section>;
};

export default CharacterList;
