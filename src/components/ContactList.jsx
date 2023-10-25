import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContactList = ({ list, onDeleteContact }) => {
  return (
    <List>
      {list.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Button onClick={() => onDeleteContact(contact.id)}>Delete</Button>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin: 5px 0;
`;

const Text = styled.p`
  margin-right: 20px;
`;

const Button = styled.button`
  background-color: #d85e79;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #a22943;
  }
`;
