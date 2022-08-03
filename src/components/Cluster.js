import React from 'react';
import Key from './Key'
import { SimpleGrid } from '@chakra-ui/react'

export default function Cluster(props) {
    return (
        <SimpleGrid
            columns={this.props.model.height.cols}
            templateColumns='repeat(5, 48px);'
            spacing='2px'
            bg="gray.100"
            border="1px"
        >
            cluster
            {this.props.model.keys.map((key, index) => (
                <Key key={index} className='Cluster-key' model={key} />
            ))}
        </SimpleGrid>
    )
}
