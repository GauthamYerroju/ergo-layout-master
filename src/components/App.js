import './App.css';
import React, { useState } from 'react';
import GridModel from '../models/grid';

import Grid from './Grid';
import Settings from './Settings';
import { Flex } from '@chakra-ui/react';

export default function App(props) {
  const [gridSize, setGridSize] = useState(48)
  const [grid, setGrid] = useState(new GridModel(10, 3))
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
        <Grid gridSize={gridSize} model={grid} />
      </Flex>
  )
}
