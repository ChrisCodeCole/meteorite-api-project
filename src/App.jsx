/* eslint linebreak-style: "off" */

import React, { useEffect } from 'react';
import './App.css';
import getMeteoriteLandingData from './services/getMeteoriteLandingData';
import SearchContainer from './components/search-components/SearchContainer';

function App() {
  useEffect(() => {
    console.log('use effect ran');
    getMeteoriteLandingData();
  }, []);

  return (
    <div className="App">
      <SearchContainer />
    </div>
  );
}

export default App;
