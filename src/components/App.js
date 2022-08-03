import React from 'react';
import useStore from '../store'

import Grid from './Grid';
import { Box, HStack, Heading } from '@chakra-ui/react';

export default function App() {
    const gridSize = 48
    const grid = useStore(state => state.grid)
    return (
        <Box
            minH='100vh'
            bgSize={`${gridSize}px ${gridSize}px`}
            bgImage='radial-gradient(circle, #999999 1px, rgba(0, 0, 0, 0) 1px)'
        >
            <HStack
                w='100%'
                bg='#282c34'
                color='white'
                padding={4}
            >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                <Heading size='md' fontWeight='normal' >Ergo Layout Master</Heading>
            </HStack>
            <Grid model={grid} />
        </Box>
    )
}
