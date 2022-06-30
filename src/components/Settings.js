import React from 'react';
import {
    Center,
    Stack,
    Checkbox,
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
} from '@chakra-ui/react'

class Settings extends React.Component {
    constructor(props) {
        super(props);
        const defaults = {
            isSplit: true,
            hasModColLeft: true,
            hasModColRight: true,
            hasNumRow: true,
            hasFnRow: true,
            hasThumbRow: true,
            zoom: 100,
        };
        this.state = { ...defaults };

        this.handleChange = this.handleChange.bind(this);
        this.getGridSize = this.getGridSize.bind(this);
    }

    render() {
        return (
            <Center>
                <form className='Settings' onChange={this.handleChange}>
                    <Stack direction="row">
                        <Checkbox isChecked={this.state.isSplit} name='isSplit'>Split Keyboard</Checkbox>
                        <Checkbox isChecked={this.state.hasModColLeft} name='hasModColLeft'>Left mod column</Checkbox>
                        <Checkbox isChecked={this.state.hasModColRight} name='hasModColRight'>Right mod column</Checkbox>
                        <Checkbox isChecked={this.state.hasNumRow} name='hasNumRow'>Number Row</Checkbox>
                        <Checkbox isChecked={this.state.hasFnRow} name='hasFnRow'>Function Row</Checkbox>
                        <Checkbox isChecked={this.state.hasThumbRow} name='hasThumbRow'>Thumb Row</Checkbox>
                        <Slider w="10em" aria-label='slider-ex-1' defaultValue={this.state.zoom} min={50} max={150} onChange={value => this.handleChange({ target: { name: 'zoom', value } })}>
                            <SliderMark value={50} mt='4' ml='-2.5' fontSize='xs'>50%</SliderMark>
                            <SliderMark value={100} mt='4' ml='-2.5' fontSize='xs'>100%</SliderMark>
                            <SliderMark value={150} mt='4' ml='-2.5' fontSize='xs'>150%</SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <SliderThumb />
                        </Slider>
                    </Stack>
                </form>
            </Center>
        );

    }

    handleChange(e) {
        const el = e.target;
        const { name } = el;
        const value = (el.type === 'checkbox') ? el.checked : el.value;
        this.setState({ ...this.state, [name]: value }, () => this.props.onChange(this.state));
    }

    getGridSize() {
        const { hasNumRow, hasFnRow, hasThumbRow, hasModColLeft, hasModColRight } = this.state;
        let rows = 3;
        let cols = 10;
        if (hasFnRow) rows += 1;
        if (hasNumRow) rows += 1;
        if (hasThumbRow) rows += 1;
        if (hasModColLeft) cols += 1;
        if (hasModColRight) cols += 1;
        return { rows, cols };
    }


}

export default Settings;