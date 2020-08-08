import React from 'react';

const Filter = (props) => {
  const handleFilter = (event) => {
    props.handleFilter({
      key: 'filter',
      value: event.target.value,
    });
  };
  return (
    <form className="searchbar">
      <label htmlFor="filter">
        <button type="submit">SEARCH</button>
      </label>
      <input type="text" id="filter" value={props.filter} onChange={handleFilter} />
    </form>
  );
};

export default Filter;
