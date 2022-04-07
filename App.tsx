import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import TabNavigator from './src/navigation/TabNavigator';
import {
  primaryColor,
  primaryDarkColor,
  screenBackgroundColor,
} from './src/constants/colors';

const theme = {
  dark: false,
  colors: {
    primary: primaryColor,
    background: screenBackgroundColor,
    card: primaryDarkColor,
    text: 'white',
    border: primaryColor,
    notification: primaryColor,
  },
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={theme}>
        <TabNavigator />
      </NavigationContainer>
    </Provider>
  );
}
