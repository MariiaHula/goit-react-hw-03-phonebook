import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Filter = ({ filteredContacts }) => {
  return (
    <FilterInput
      name="filter"
      onChange={filteredContacts}
      placeholder="Find contact by name"
    />
  );
};

Filter.propTypes = {
  filteredContacts: PropTypes.func.isRequired,
};

export default Filter;

const FilterInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 300px;
  margin-bottom: 10px;
`;
