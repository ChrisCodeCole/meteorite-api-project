import React from 'react';
import getMeteoriteLandingData from '../services/getMeteoriteLandingData';

const MeteoriteContext = React.createContext();

export const MeteoriteConsumer = MeteoriteContext.Consumer;

// function paginate (array, page_size, page_number) {
//   --page_number; // because pages logically start with 1, but technically with 0
//   return array.slice(page_number * page_size, (page_number + 1) * page_size);
// }

export class MeteoriteProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      payload: [], // meteorite data from axios call
      filteredArray: [], // based on search terms
      paginatedArray: [], // based on page number
      pageNumber: 1,
      pageSize: 20,
    };
  }

  componentDidMount() {
    getMeteoriteLandingData(this.updatePayload);
  }

  updatePayload = (data) => {
    this.setState({ payload: data, filteredArray: data });
  };

  updateFilteredArray = (data, callback) => {
    console.log('filtered arr', data);
    this.setState({ filteredArray: data }, () => {
      callback();
    });
  };

  updatePaginatedArray = (data) => {
    this.setState({ paginatedArray: data });
  };

  updatePageNumber = (num, callback) => {
    this.setState({ pageNumber: num }, () => {
      callback();
    });
  };

  paginate = () => {
    const { filteredArray, pageNumber, pageSize } = this.state;
    const newPageNumber = pageNumber - 1; // pages logically start with 1, but technically with 0
    const arr = filteredArray.slice(newPageNumber * pageSize, (newPageNumber + 1) * pageSize);
    this.updatePaginatedArray(arr);
    console.log('paginated arr', arr);
  };

  render() {
    const { children } = this.props;
    return (
      <MeteoriteContext.Provider
        value={{
          ...this.state,
          updateFilteredArray: this.updateFilteredArray,
          paginate: this.paginate,
          updatePageNumber: this.updatePageNumber,
        }}
      >
        {children}
      </MeteoriteContext.Provider>
    );
  }
}
