import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons';
import React from 'react';

interface ITabBarIcons {
  route: string;
  focused: boolean;
  color: string;
  size: number;
}

function tabBarIcons({ route, focused, color, size }: ITabBarIcons) {
  if (route === 'GamesStack') {
    return <FontAwesome5 name='dice' size={24} color={color} />;
  } else if (route === 'InProgress') {
    return (
      <MaterialCommunityIcons name='progress-clock' size={24} color={color} />
    );
  } else if (route === 'History') {
    return <MaterialIcons name='history' size={24} color={color} />;
  }
}

export default tabBarIcons;
