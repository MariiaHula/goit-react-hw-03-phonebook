import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  handleChangeInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleAddNewContactOnSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    this.props.addContact({ name, number });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    const addContactOnSubmit = this.handleAddNewContactOnSubmit;

    return (
      <Form onSubmit={addContactOnSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={this.handleChangeInput}
          />
        </Label>
        <Button type="submit">Add Contact</Button>
      </Form>
    );
  }
}

export default ContactForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #0056b3;
  }
`;
