import './App.css';
import React from 'react';
import GridModel from '../models/grid';

import Grid from './Grid';
import Settings from './Settings';
import { Flex } from '@chakra-ui/react';


class App extends React.Component {

  constructor(params) {
    super(params)
    this.gridBaseSize = 48;
    this.state = {
      gridSize: this.gridBaseSize,
      grid: new GridModel(10, 3)
    };
    this.onSettingsChange = this.onSettingsChange.bind(this);
  }

  render() {

    return (
      <Flex
        className="App"
        direction="column"
        minH='100vh'
      >
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1>Ergo Layout Master</h1>
        </header>
        <Settings onChange={this.onSettingsChange} />
        <Grid gridSize={this.state.gridSize} model={this.state.grid} />
      </Flex>
    );
  }

  onSettingsChange(settings) {
    this.setState({ gridSize: Math.round(this.gridBaseSize * settings.zoom / 100) });
  }
}

export default App;
