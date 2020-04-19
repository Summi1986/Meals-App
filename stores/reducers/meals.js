import {
    MEALS
} from '../../data/dummy-data';
import {
    TOGGLE_FAVORITE, SET_FILTERS
} from '../actions/meals';

const initialStates = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};



const mealsReducers = (state = initialStates, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
            let updatedMeals = [...state.favoriteMeals];
            if (existingIndex !== -1) {
                updatedMeals.splice(existingIndex, 1);
            } else {
                const meal = state.meals.find(meal => meal.id === action.mealId);
                updatedMeals = [...updatedMeals, meal];
            }
            return {
                ...state, favoriteMeals: updatedMeals
            };
            case SET_FILTERS:
                const appliedFilters = action.filters;
                const filteredMeals = state.meals.filter(meal => {
                    if(appliedFilters.isVegan && !meal.isVegan) {
                        return false
                    }
                    if(appliedFilters.isGlutenFree && !meal.isGlutenFree) {
                        return false
                    }
                    if(appliedFilters.isVegetarian && !meal.isVegetarian) {
                        return false
                    }
                    if(appliedFilters.isLactoseFree && !meal.isLactoseFree) {
                        return false
                    }
                    return true;
                })
                return {
                    ...state, filteredMeals
                }

        default:
            return state;

    }
    return state;
};

export default mealsReducers;