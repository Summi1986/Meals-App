import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import HeaderButton from '../components/HeaderButton';
import DefaultText from '../components/DefaultText';
import { toggleFavorite } from '../stores/actions/meals';

const ListItem = ({ children }) => {
    return (
        <View style={styles.listItem}>
            <DefaultText>{children}</DefaultText>
        </View>

    )
}

const MealDetailScreen = ({ navigation }) => {
    const { duration, complexity, affordablity, imageUrl, ingredients, steps, id } = navigation.getParam('mealDetails');
    const isFavoriteMeal = useSelector(state => state.meals.favoriteMeals.some(meal => meal.id === id));
    const dispatch = useDispatch();

    const toggleFavoriteHandler = useCallback(() => {
        dispatch(toggleFavorite(id));
    }, [dispatch, id])

    useEffect(() => {
        navigation.setParams({ toggleFavorite: toggleFavoriteHandler });
    }, [toggleFavoriteHandler]);

    useEffect(() => {
        navigation.setParams({ isFavoriteMeal });
    }, [isFavoriteMeal]);

    return (
        <ScrollView>
            <Image source={{
                uri: imageUrl
            }} style={styles.image} />
            <View style={styles.details}>
                <DefaultText>{`${duration}m`}</DefaultText>
                <DefaultText>{complexity.toUpperCase()}</DefaultText>
                <DefaultText>{affordablity.toUpperCase()}</DefaultText>
            </View>
            <Text style={styles.title}>Ingredients</Text>
            <View>
                {
                    ingredients.map(ingredient => <ListItem key={ingredient}>{ingredient}</ListItem>)
                }
            </View>
            <Text style={styles.title}>Steps</Text>
            <View>
                {
                    steps.map(step => <ListItem key={step}>{step}</ListItem>)
                }
            </View>
        </ScrollView>
    )
};

MealDetailScreen.navigationOptions = ({ navigation }) => {
    const { title, headerColor } = navigation.getParam('mealDetails');
    const toggleFavoriteHandler = navigation.getParam('toggleFavorite');
    const isFavorite = navigation.getParam('isFavoriteMeal')
    return {
        headerTitle: () => <View style={styles.titleContainer}><Text numberOfLines={1} style={styles.title}>{title}</Text></View>,
        headerRight: () => <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item title='Favorite' iconName={`${isFavorite ? 'ios-star' : 'ios-star-outline'}`} onPress={toggleFavoriteHandler}></Item>
        </HeaderButtons>,
        headerStyle: {
            backgroundColor: headerColor
        }
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    details: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '90%'
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        fontFamily: 'open-sans-bold'
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
})

export default MealDetailScreen;