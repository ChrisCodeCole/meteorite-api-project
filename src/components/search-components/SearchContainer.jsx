import React from 'react';
import Grid from '@material-ui/core/Grid';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import { MeteoriteConsumer } from '../../context/context';

import './styles/SearchContainer.css';

function SearchContainer() {
  return (
    <MeteoriteConsumer>
      {({
        payload, paginatedArray, paginate, updatePageNumber, updateFilteredArray, filteredArray,
      }) => (
        <div className="SearchContainer">
          <Grid container spacing={8} direction="column" justify="center" alignItems="center">
            <Grid item xs={12}>
              <SearchBar payload={payload} paginate={paginate} updatePageNumber={updatePageNumber} updateFilteredArray={updateFilteredArray} />
            </Grid>
            <Grid item xs={12}>
              <SearchResults
                payload={payload}
                filteredArray={filteredArray}
                paginatedArray={paginatedArray}
                paginate={paginate}
                updatePageNumber={updatePageNumber}
              />
            </Grid>
          </Grid>
        </div>
      )}
    </MeteoriteConsumer>
  );
}

export default SearchContainer;
