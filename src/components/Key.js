import React from 'react';
import { Box } from '@chakra-ui/react';

class Key extends React.Component {
    render() {
        return (
            <Box
                className="Key"
                bg="gray.100"
                border="1px"
                w='48px'
                h='48px'
            >
                <label>{this.props.model.label}</label>
            </Box>
        );
    }
}

export default Key;