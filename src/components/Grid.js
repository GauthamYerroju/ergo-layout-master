import React from 'react';
import Cluster from './Cluster';
import { ClusterTypes } from '../models/cluster';
import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    VStack,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { addCluster } from '../store';

function Grid(props) {
    return (
        <VStack
            margin={4}
        >
            <Menu>
                <MenuButton
                    as={Button}
                    h='48px'
                    w='48px'
                    colorScheme='purple'
                    alignSelf='end'
                >
                    <AddIcon />
                </MenuButton>
                <MenuList>
                    {Object.keys(ClusterTypes).map(name =>
                        <MenuItem key={name} onClick={() => addCluster(name)}>{name}</MenuItem>
                    )}
                </MenuList>
            </Menu>
            
            <Box>
                {props.model.clusters.map((cluster, i) => <Cluster key={i} model={cluster}></Cluster>)}
            </Box>
        </VStack>
    )
}

export default Grid