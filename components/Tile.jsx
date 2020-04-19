import React from 'react';
import {View, Text, TouchableOpacity, TouchableNativeFeedback, StyleSheet, Platform} from 'react-native';

const Tile = ({item, onSelect}) => {
    const TouchableComp = Platform.Version >= 21 ? TouchableNativeFeedback:  TouchableOpacity;
    const {title, color} = item;
    return (
        <View style={styles.tile}>
            <TouchableComp style={{flex: 1}} onPress={onSelect}>
                <View style={{...styles.container, ... {backgroundColor: color}}}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
            </TouchableComp>
    </View>
    )
};

const styles = StyleSheet.create({
    tile: {
        flex: 1,
        margin: 20,
        height: 150,
        borderRadius: 10,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible',
        elevation: 3,
    },
    title: {
        fontSize: 16,
        fontFamily: 'open-sans-bold'
      },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 0.5,
        padding: 15,
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
        
    }
});

export default Tile;