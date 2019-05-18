import React from 'react';
import TextField from '@material-ui/core/TextField';

function SearchBar() {
  return (
    <div className="App">
      <form className="example" action="action_page.php">
        <TextField id="standard-search" label="Search" type="search" margin="normal" />
      </form>
    </div>
  );
}

export default SearchBar;
