import './App.css';
import React from 'react';
import useStore from '../store'

import Grid from './Grid';
import { Flex } from '@chakra-ui/react';

export default function App(props) {
  const gridSize = 48
  const grid = useStore(state => state.grid)
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
