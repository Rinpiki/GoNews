import './App.css';
import './index.css';
import React from 'react';
import Title from './components/Title';
import Filter from './components/Filter';
import News from './components/News';

function App() {
  return (
    <div>
      <Title />
      <Filter />
      <News />
    </div>
  );
}

export default App;
