import React from 'react';
import Column from './Column'
import { Flex } from '@chakra-ui/react'

export default function Cluster(props) {
    return (
        <Flex
            flexDirection="row"
            flexWrap="0"
        >
            {props.model.columns.map((column, index) => (
                <Column key={index} model={column} />)
            )}
        </Flex>
    )
}
