/* eslint linebreak-style: "off" */

import React from 'react';
import './App.css';
import SearchContainer from './components/search-components/SearchContainer';
import { MeteoriteProvider } from './context/context';

function App() {
  return (
    <div className="App">
      <MeteoriteProvider>
        <SearchContainer test="test" />
      </MeteoriteProvider>
    </div>
  );
}

export default App;
