import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import Tile from '../components/Tile';
import COLORS from '../constants/colors';
import { CATEGORIES } from '../data/dummy-data';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const CategoriesScreen = ({ navigation }) => {

    const RenderGridItem = ({ item }) => (
        <Tile item={item} onSelect={() => {
            navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                    categoryMealsProps: item
                }
            }
            )
        }
        } />
    );

    return (
        <FlatList data={CATEGORIES}
            numColumns={2}
            keyExtractor={(item) => item.id}
            renderItem={RenderGridItem} />
    )
};

CategoriesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Meal Categories',
        headerStyle: {
            backgroundColor: COLORS.PRIMARY
        },
        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()}></Item>
        </HeaderButtons>
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    }
});

export default CategoriesScreen;