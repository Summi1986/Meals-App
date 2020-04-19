import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import NoDataView from '../components/NoDataView';

const CategoryMealsScreen = ({ navigation }) => {
    const { color, id } = navigation.getParam('categoryMealsProps');
    const filteredMeals = useSelector((state) => state.meals.filteredMeals);
    const availableMeals = filteredMeals.filter(meal => meal.categoryIds.includes(id));

    if (!availableMeals.length) {
        return <NoDataView noDataText='No Meal found matching this category!'/>
    }

    return (
        <MealList list={availableMeals} navigation={navigation} headerColor={color} />
    )
};

CategoryMealsScreen.navigationOptions = ({ navigation }) => {
    const { title, color } = navigation.getParam('categoryMealsProps');
    return {
        headerTitle: title,
        headerStyle: {
            backgroundColor: color
        }
    }
}

export default CategoryMealsScreen;