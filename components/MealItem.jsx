import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';

const MealItem = ({ mealItem, onSelect }) => {
    const TouchableComp = Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    const { title, duration, complexity, affordablity, imageUrl } = mealItem;
    return (
        <View style={styles.mealItem}>
            <TouchableComp onPress={onSelect}>
                <View style={styles.item}>
                    <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                        <ImageBackground source={{
                            uri: imageUrl
                        }} style={styles.bgImage}>
                            <Text numberOfLines={1} style={styles.title}>{title}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                        <DefaultText>{`${duration}m`}</DefaultText>
                        <DefaultText>{complexity.toUpperCase()}</DefaultText>
                        <DefaultText>{affordablity.toUpperCase()}</DefaultText>
                    </View>
                </View>
            </TouchableComp>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        width: '100%',
        height: 200,
        padding: 10
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: '#ffffff',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    item: {
        borderRadius: 10,
        overflow: 'hidden',
        backgroundColor: '#ccc',
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '80%',
    },
    detailItem: {
        fontFamily: 'open-sans-bold'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealDetails: {
        height: '20%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    }
});

export default MealItem;