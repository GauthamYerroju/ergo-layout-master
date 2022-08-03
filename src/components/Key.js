import React from 'react';
import { Box } from '@chakra-ui/react';

export default function Key(props) {
    return (
        <Box
            className="Key"
            bg="gray.100"
            border="1px"
            w='48px'
            h='48px'
        >
            <label>{props.model}</label>
        </Box>
    );
}
