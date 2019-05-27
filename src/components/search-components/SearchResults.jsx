import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import './styles/SearchResults.css';

function SearchResults(props) {
  const { filteredArray } = props;
  return (
    <div className="SearchResults">
      <Paper>
        <Table>
          <TableHead style={{ backgroundColor: '#f5efed', border: '1px solid black' }} borderBottom={1}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Id</TableCell>
              <TableCell align="right">Name Type</TableCell>
              <TableCell align="right">Rec Class</TableCell>
              <TableCell align="right">Mass (g)</TableCell>
              <TableCell align="right">Fall</TableCell>
              <TableCell align="right">Year</TableCell>
              <TableCell align="right">Latitude</TableCell>
              <TableCell align="right">Longitude</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredArray.map((item, i) => (
              <TableRow style={i % 2 === 0 ? { backgroundColor: '#E5E4E2' } : null} key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.id}</TableCell>
                <TableCell align="right">{item.nametype}</TableCell>
                <TableCell align="right">{item.recclass}</TableCell>
                <TableCell align="right">{item.mass}</TableCell>
                <TableCell align="right">{item.fall}</TableCell>
                <TableCell align="right">{item.year}</TableCell>
                <TableCell align="right">{item.reclat}</TableCell>
                <TableCell align="right">{item.reclong}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
      ;
    </div>
  );
}

export default SearchResults;
