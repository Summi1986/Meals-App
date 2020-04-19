import React from 'react';
import { View, StyleSheet, Switch } from 'react-native';
import DefaultText from './DefaultText';
import COLORS from '../constants/colors';

const FilterContainer = ({ filterText, filterValue, filterChangeHanndler }) => (
    <View style={styles.filterContainer}>
        <DefaultText>{filterText}</DefaultText>
        <Switch value={filterValue}
            trackColor={{
                true: COLORS.PRIMARY
            }}
            thumbColor={'#b19cd9'}
            onValueChange={(newValue) => filterChangeHanndler(newValue)}/>
    </View>
);

const styles = StyleSheet.create({
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 15
    }
});

export default FilterContainer;