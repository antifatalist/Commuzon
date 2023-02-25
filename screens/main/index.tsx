import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { BottomTabParamList } from '../../navigation/types';
import DetailsScreen from './DetailsScreen';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <BottomTab.Screen name="Details" component={DetailsScreen} options={{ headerShown: false }} />
    </BottomTab.Navigator>
  );
}

export default MainScreen;