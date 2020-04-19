import React from 'react';
import COLORS from '../constants/colors'
import { FlatList, StyleSheet, View } from 'react-native';
import MealItem from '../components/MealItem';

const MealList = ({list, navigation, headerColor}) => {

    const RenderMealItem = ({ item }) => (
        <MealItem mealItem={item} onSelect={() => {
            navigation.navigate({
                routeName: 'MealDetails',
                params: {
                    mealDetails: {
                        headerColor: headerColor || COLORS.PRIMARY,
                        ...item
                    }
                }
            })
        }} />
    );

    return (
    <View style={styles.list}>
        <FlatList data={list}
            renderItem={RenderMealItem}
            style={{ width: '100%' }}
            keyExtractor={(item) => item.id} />
    </View>
    )
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default MealList;