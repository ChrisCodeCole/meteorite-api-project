/* eslint react/prop-types: 0 */
import React from 'react';
import getMeteoriteLandingData from '../services/getMeteoriteLandingData';

const MeteoriteContext = React.createContext();

export const MeteoriteConsumer = MeteoriteContext.Consumer;

export class MeteoriteProvider extends React.Component {
  constructor() {
    super();
    this.state = {
      payload: [],
    };
  }

  componentDidMount() {
    getMeteoriteLandingData(this.updatePayload);
  }

  updatePayload = (data) => {
    this.setState({ payload: data });
  };

  render() {
    const { children } = this.props;
    return (
      <MeteoriteContext.Provider
        value={{
          ...this.state,
        }}
      >
        {children}
      </MeteoriteContext.Provider>
    );
  }
}
