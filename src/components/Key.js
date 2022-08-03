import React from 'react';
import { Square } from '@chakra-ui/react';

export default function Key(props) {
    return (
        <Square
            backgroundColor="#efefef"
            dropShadow=""
            borderRadius={4}
            size={14}
            margin={1}
        >
            <label>{props.model.label}</label>
        </Square>
    );
}
