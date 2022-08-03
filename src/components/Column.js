import React from 'react';
import Key from './Key'
import { Box } from '@chakra-ui/react'

export default function Column(props) {
    return (
        <Box>
            {props.model.keys.map((key, index) => (
                <Key key={index} model={key} />)
            )}
        </Box>
    )
}
