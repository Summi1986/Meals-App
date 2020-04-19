import React, { useState, useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import COLORS from '../constants/colors';
import DefaultText from '../components/DefaultText'
import HeaderButton from '../components/HeaderButton';
import FilterContainer from '../components/FilterContainer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { setFilters } from '../stores/actions/meals';

const FiltersScreen = ({ navigation }) => {
    const [isGlutenFree, setGlutenFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);

    const dispatch = useDispatch();

    const savedFilters = useCallback(() => {
        const filters = {
            isVegan,
            isGlutenFree,
            isVegetarian,
            isLactoseFree
        };
        dispatch(setFilters(filters));
    }, [isVegan, isGlutenFree, isVegetarian, isLactoseFree, dispatch]);

    useEffect(() => {
        navigation.setParams({ savedFilters });
    }, [savedFilters]);

    return (
        <View style={styles.screen}>
            <DefaultText style={styles.title}>
                Avaialabe Filters/ Restriction
            </DefaultText>
            <FilterContainer filterText='Gluten-Free'
                filterValue={isGlutenFree}
                filterChangeHanndler={setGlutenFree} />
            <FilterContainer filterText='Vegan'
                filterValue={isVegan}
                filterChangeHanndler={setIsVegan} />
            <FilterContainer filterText='Vegetarian'
                filterValue={isVegetarian}
                filterChangeHanndler={setIsVegetarian} />
            <FilterContainer filterText='Lactose-Free'
                filterValue={isLactoseFree}
                filterChangeHanndler={setIsLactoseFree} />
        </View>
    )
};

FiltersScreen.navigationOptions = (navigationData) => {
    const { navigation } = navigationData;
    return {
        headerTitle: 'Filter Meals',
        headerStyle: {
            backgroundColor: COLORS.PRIMARY
        },

        headerLeft: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}></Item>
        </HeaderButtons>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Save' iconName='ios-save' onPress={() => {
                const savedFilters = navigation.getParam('savedFilters');
                savedFilters();
                navigation.navigate({
                    routeName: 'Categories'
                })
            }}></Item>
        </HeaderButtons>
    }
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    }
})

export default FiltersScreen;