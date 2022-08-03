import React from 'react';
import Cluster from './Cluster';
import { ClusterTypes } from '../models/cluster';
import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    // MenuItemOption,
    // MenuGroup,
    // MenuOptionGroup,
    // MenuDivider,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { addCluster } from '../store';

function Grid(props) {
    return (
        <Flex
            direction="column"
            grow="1"
            className='Cluster-Container'
            bgSize={`${props.gridSize}px ${props.gridSize}px`}
            bgImage='radial-gradient(circle, #000000 1px, rgba(0, 0, 0, 0) 1px)'
            w='100%'
            h='100%'
        >
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Add cluster...
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
            </Box>
        </Flex>
    )
}

export default Grid