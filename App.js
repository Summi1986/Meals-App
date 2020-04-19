import React, {useState} from 'react';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';
import {enableScreens} from 'react-native-screens';
import { StyleSheet} from 'react-native';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import MealReducers from './stores/reducers/meals';
import MainNavigator from './navigation/MealsNavigator';

enableScreens();

const rootReducers = combineReducers({
  meals: MealReducers
});

const store = createStore(rootReducers);

const loadFonts = () => {
  return Font.loadAsync({
      'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
      'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
};

export default function App() {
  const [appLoadingState, setAppLoadingState] = useState(true);

  if (appLoadingState){
    return <AppLoading  startAsync={loadFonts}
                        onError={err => console.log(err)}
                        onFinish={() => setAppLoadingState(false)}/>
  }

  return (
        <Provider store={store}>
            <MainNavigator/>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
