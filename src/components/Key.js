import React from 'react';
import { Square, Box } from '@chakra-ui/react';
import { useStore } from '../store';

export default function Key(props) {
    const gridSize = useStore(state => state.gridSize)
    return (
        <Box
            w={gridSize}
            h={gridSize}
            margin={1}
        >
            <Square
                width='100%'
                height='100%'
                backgroundColor="#efefef"
                borderRadius={4}
            >{props.model.label}</Square>
        </Box>
    );
}
