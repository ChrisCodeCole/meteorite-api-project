import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import './styles/SearchBar.css';

function SearchBar(props) {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    const {
      updatePageNumber, paginate, updateFilteredArray, payload,
    } = props;

    const resetCallback = () => {
      updatePageNumber(1, paginate);
    };

    let newArr = [];
    if (input !== '') {
      newArr = payload.filter(meteoriteObj => meteoriteObj.name.toLowerCase().includes(input.toLowerCase()));
    } else {
      newArr = payload;
    }

    updateFilteredArray(newArr, resetCallback);
  };

  const handleClick = () => {
    handleSearch();
  };

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="SearchBar">
      <Grid container spacing={8} direction="row" justify="center" alignItems="center">
        <Grid item xs={6}>
          <TextField
            // variant="outlined"
            className="SearchBar-textfield"
            label="Enter search terms"
            type="search"
            margin="normal"
            onKeyPress={e => handleEnterKeyPress(e)}
            onInput={e => setInput(e.target.value)}
          />
          {' '}
        </Grid>
        <Grid className="SearchBar-button" style={{ marginTop: '1rem' }} item xs={6}>
          <Button variant="outlined" color="primary" type="button" onClick={() => handleClick()}>
            Search
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}

export default SearchBar;
