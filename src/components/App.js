import React from 'react';
import useStore from '../store'

import Grid from './Grid';
import { Box, HStack, Heading } from '@chakra-ui/react';

export default function App() {
    const grid = useStore(state => state.grid)
    const showBG = useStore(state => state.showBG)
    const gridSize = useStore(state => state.gridSize)
    return (
        <Box
            minH='100vh'
            bgSize={showBG ? `${gridSize}px ${gridSize}px` : 'inherited'}
            bgImage={showBG ? 'radial-gradient(circle, #999999 1px, rgba(0, 0, 0, 0) 1px)' : 'inherited'}
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
