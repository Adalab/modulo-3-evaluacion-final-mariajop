import React from 'react';

const Filter = (props) => {
  const handleFilterName = (ev) => {
    props.handleFilters({
      key: 'filterName',
      value: ev.target.value,
    });
  };

  return (
    <form>
      <input type="text"></input>
      <button type="submit">
        <i className="fa fa-search">SEARCH</i>
      </button>
    </form>
  );
};

export default Filter;
