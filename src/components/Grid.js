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

class Grid extends React.Component {
    constructor(props) {
        super(props)
        this.createCluster = this.createCluster.bind(this);
    }
    render() {
        return (
            <Flex
                direction="column"
                grow="1"
                className='Cluster-Container'
                bgSize={`${this.props.gridSize}px ${this.props.gridSize}px`}
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
                            {Object.keys(ClusterTypes).map(name => <MenuItem key={name} onClick={() => this.createCluster(name)}>{name}</MenuItem>)}
                        </MenuList>
                    </Menu>
                    <Box>
                        {this.props.model.clusters.map((cluster, i) => {
                            return <Cluster key={i} model={cluster}></Cluster>
                        })}
                    </Box>
                </Box>
            </Flex>
        );
    }

    createCluster(type) {
        const cluster = new ClusterTypes[type](0, 0);
        this.props.model.add(cluster)
        console.log(`Model of type ${type} added.`)
        // this.setState({ ...this.state, grid: this.state.grid })
    }
}

export default Grid
