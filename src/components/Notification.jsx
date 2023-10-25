import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Notification = ({ message }) => {
  return <NotificationWrapper>{message}</NotificationWrapper>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;

const NotificationWrapper = styled.div`
  background-color: #ff8080;
  color: #fff;
  padding: 10px;
  border-radius: 4px;
  text-align: center;
`;
