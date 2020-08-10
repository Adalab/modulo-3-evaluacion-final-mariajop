import React from 'react';

const Filter = (props) => {
  const handleFilter = (event) => {
    props.handleFilter({
      key: 'filter',
      value: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit} className="searchbar">
      <label htmlFor="filter">
        <button className="searchbar__button" type="submit">
          SEARCH
        </button>
      </label>
      <input className="searchbar__input" type="text" id="filter" value={props.filter} onChange={handleFilter} />
    </form>
  );
};

export default Filter;
