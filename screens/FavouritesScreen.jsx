import React from 'react';
import { useSelector } from 'react-redux';
import COLORS from '../constants/colors';
import NoDataView from '../components/NoDataView';
import MealList from '../components/MealList';
import HeaderButton from '../components/HeaderButton';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

const FavouritesScreen = ({ navigation }) => {
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    const hasFavMeals = favMeals && favMeals.length !== 0;

    if (!hasFavMeals) {
        return <NoDataView noDataText='No Favorite meals found. Please add some!' />
    }
    return <MealList list={favMeals} navigation={navigation} />
};

FavouritesScreen.navigationOptions = (navigationData) => {
    return {
        headerTitle: 'Your Favorite Meals',
        headerStyle: {
            backgroundColor: COLORS.PRIMARY
        },

        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navigationData.navigation.toggleDrawer()}></Item>
        </HeaderButtons>
    }
};

export default FavouritesScreen;