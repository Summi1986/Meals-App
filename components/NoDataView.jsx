import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DefaultText from './DefaultText'

const NoDataView = ({ noDataText }) => {
    return (
        <View style={styles.noDataContainer}>
            <DefaultText style={styles.noDataContent}>{noDataText}</DefaultText>
        </View>
    )
};

const styles = StyleSheet.create({
    noDataContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 20
    },
    noDataContent: {
        fontSize: 16
       
    }
});

export default NoDataView;