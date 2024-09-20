import React from 'react';
import { Heading } from './Heading';

export const AppBar = () => {
  return (
    <div>
      <Heading />

      <a href="/">Home</a>
      <a href="/contacts">Contacts</a>
    </div>
  );
};
