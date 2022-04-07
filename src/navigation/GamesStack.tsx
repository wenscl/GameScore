import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { primaryDarkColor } from '../constants/colors';
import GamesScreen from '../screens/Games';
import NewGameScreen from '../screens/NewGame';

export type GamesStackParamList = {
  Games: undefined;
  NewGame: { name: string };
};
const Stack = createStackNavigator<GamesStackParamList>();

function GamesStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: primaryDarkColor },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen name='Games' component={GamesScreen} />
      <Stack.Screen name='NewGame' component={NewGameScreen} />
    </Stack.Navigator>
  );
}

export default GamesStack;
