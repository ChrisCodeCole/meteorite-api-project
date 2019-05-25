import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SearchBar() {
  const handleSearch = (e) => {
    console.log(e);
  };

  // const handleEnterKeyPress = (e) => {
  //   console.log(e);
  // };

  return (
    <div className="App">
      <TextField label="Enter search terms" type="search" margin="normal" />
      <Button variant="outlined" color="primary" type="button" onClick={e => handleSearch(e)}>
        Primary
      </Button>
    </div>
  );
}

export default SearchBar;
