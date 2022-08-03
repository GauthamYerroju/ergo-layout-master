import React from 'react';
import Column from './Column'
import { Flex } from '@chakra-ui/react'

export default function Cluster(props) {
    return (
        <Flex
            direction="row"
        >
            {props.model.columns.map((column, index) => (
                <Column key={index} model={column} />)
            )}
        </Flex>
    )
}
