/* eslint-disable react/jsx-no-bind */
import './App.css';
import './index.css';
import React from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import News from './components/News';

function App() {
  return (
    <>
      <Title />
      <Filter />
      <News />
    </>
  );
}

export default App;
