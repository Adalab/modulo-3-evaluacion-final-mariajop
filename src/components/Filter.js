import React from 'react';

const Filter = (props) => {
  const handleFilter = (ev) => {
    props.handleFilter({
      key: 'filter',
      value: ev.target.value,
    });
  };
  return (
    <form>
      <input type="text" id="filter" value={props.filter} onChange={handleFilter}></input>
      <button type="submit">
        <i className="fa fa-search">SEARCH</i>
      </button>
    </form>
  );
};

export default Filter;
