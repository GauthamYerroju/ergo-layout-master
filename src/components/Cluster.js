import React from 'react';
import Key from './Key'
import { SimpleGrid } from '@chakra-ui/react'

export default function Cluster(props) {
    return (
        <SimpleGrid
            columns={props.model.height.cols}
            templateColumns='repeat(4, 48px);'
            spacing='2px'
            bg="gray.100"
            border="1px"
        >
            {props.model.keys.flat().map((key, index) => (
                <Key key={index} className='Cluster-key' model={key} />)
            )}
        </SimpleGrid>
    )
}
