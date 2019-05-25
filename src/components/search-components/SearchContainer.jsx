import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { MeteoriteConsumer } from '../../context/context';

// import './styles/SearchContainer.css';

function SearchContainer() {
  // useEffect(() => {
  //   console.log('use effect ran');
  //   console.log('props', props);
  // }, []);
  return (
    <MeteoriteConsumer>
      {({ payload }) => (
        <div className="SearchContainer">
          <SearchBar payload={payload} />
          <SearchResults payload={payload} />
        </div>
      )}
    </MeteoriteConsumer>
  );
}

export default SearchContainer;
