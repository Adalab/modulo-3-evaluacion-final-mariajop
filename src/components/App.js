import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Filter from './Filter';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import getApiData from '../services/api';
import Logo from '../data/images/Rick_and_Morty_-_logo_(English).png';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    setFilter(data.value);
  };

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const character = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });
    if (character) {
      return (
        <CharacterDetail
          name={character.name}
          species={character.species}
          image={character.image}
          status={character.status}
          origin={character.origin.name}
          episode={character.episode}
        />
      );
    } else {
      return <p className="card__notfound">Character not found :(</p>;
    }
  };

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.toUpperCase().includes(filter.toUpperCase());
    });
  };

  return (
    <div>
      <h1 className="header">
        <img src={Logo} alt="logo"></img>
      </h1>
      <Filter filter={filter} handleFilter={handleFilter} />
      <CharacterList characters={renderFilteredCharacters()} />
      <Switch>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
