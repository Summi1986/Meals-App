import React from 'react';
import {
    Platform, Text
} from 'react-native';
import {
    createAppContainer
} from 'react-navigation';
import {
    createStackNavigator
} from 'react-navigation-stack';
import {
    createDrawerNavigator
} from 'react-navigation-drawer';
import {
    createBottomTabNavigator
} from 'react-navigation-tabs';
import {
    createMaterialBottomTabNavigator
} from 'react-navigation-material-bottom-tabs'
import {
    Ionicons
} from '@expo/vector-icons';
import COLORS from '../constants/colors';
import Filters from '../screens/FiltersScreen';
import Favorite from '../screens/FavouritesScreen'
import Categories from '../screens/CategoriesScreen';
import MealDetails from '../screens/MealDetailsScreen';
import CategoryMeals from '../screens/CategoryMealsScreen';

const MealsNavigator = createStackNavigator({
    Categories,
    MealDetails,
    CategoryMeals
}, {
    defaultNavigationOptions: {
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center'
    }
});

const FavoriteNavigator = createStackNavigator({
    Favorite,
    MealDetails
}, {
    defaultNavigationOptions: {
        headerTintColor: '#ffffff',
        headerTitleAlign: 'center'
    }
});

const FilterNavigator = createStackNavigator({
    Filters
});

const tabConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-restaurant'
                size = {
                    25
                }
                color = {
                    tabInfo.tintColor
                }
                />
            },
            tabBarColor: COLORS.PRIMARY,
            tabBarLabel: Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Meals</Text> : 'Meals'
        }
    },
    Favorite: {
        screen: FavoriteNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo) => {
                return <Ionicons name = 'ios-star'
                size = {
                    25
                }
                color = {
                    tabInfo.tintColor
                }
                />
            },
            tabBarColor: COLORS.SECONDARY,
            tabBarLabel:  Platform.OS === 'android' ? <Text style={{fontFamily: 'open-sans-bold'}}>Favorites</Text> : 'Favorites'
        }
    }
};

const MealsTabNavigator = Platform.OS === 'android' ? createMaterialBottomTabNavigator(tabConfig, {
    activeTintColor: '#ffffff',
    shifting: true
}) : createBottomTabNavigator(
    tabConfig, {
        tabBarOptions: {
            activeTintColor: COLORS.SECONDARY
        }
    }
);

const MainNavigator = createDrawerNavigator({
    MealsFav: {
        screen: MealsTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals & Favorite'
        }
    },
    Filters: {
        screen: FilterNavigator,
        navigationOptions: {
            drawerLabel: 'Filter Meals'
        }
    }
}, {
    contentOptions: {
        activeTintColor: COLORS.SECONDARY,
        labelStyle: {
            fontFamily: 'open-sans-bold'

        }
    }
});


export default createAppContainer(MainNavigator);