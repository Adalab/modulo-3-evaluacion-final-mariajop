import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import getApiData from '../services/api';
import Filter from './Filter';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getApiData().then((data) => {
      setCharacters(data);
    });
  }, []);

  const handleFilter = (data) => {
    console.log('esto ocurre:', data);
    setFilter(data.value);
  };

  const renderCharacterDetail = (props) => {
    const routeCharacterId = props.match.params.characterId;
    const character = characters.find((character) => {
      return character.id === parseInt(routeCharacterId);
    });
    if (character) {
      return <CharacterDetail name={character.name} image={character.image} status={character.status} />;
    } else {
      return <p>Character not found</p>;
    }
  };

  const renderFilteredCharacters = () => {
    return characters.filter((character) => {
      return character.name.includes(filter);
    });
  };

  return (
    <div>
      <h1>Rick and Morty</h1>
      <Switch>
        <Route exact path="/">
          <Filter filter={filter} handleFilter={handleFilter} />
          <CharacterList characters={characters} />
        </Route>
        <Route path="/character/:characterId" render={renderCharacterDetail} />
      </Switch>
    </div>
  );
};

export default App;
