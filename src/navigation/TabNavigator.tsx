import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import {
  tabActiveColor,
  tabBarColor,
  tabInactiveColor,
} from '../constants/colors';
import HistoryScreen from '../screens/History';
import InProgressScreen from '../screens/InProgress';
import GamesStack from './GamesStack';
import tabBarIcons from './tabBarIcons';

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Games'
      screenOptions={({ route }) => ({
        tabBarIcon: (props) => tabBarIcons({ route: route.name, ...props }),
        tabBarActiveTintColor: tabActiveColor,
        tabBarInactiveTintColor: tabInactiveColor,
        tabBarActiveBackgroundColor: tabBarColor,
        tabBarInactiveBackgroundColor: tabBarColor,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name='GamesStack'
        component={GamesStack}
        options={{ title: 'Games' }}
      />
      <Tab.Screen
        name='InProgress'
        component={InProgressScreen}
        options={{ title: 'In Progress', tabBarBadge: 3 }}
      />
      <Tab.Screen name='History' component={HistoryScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
