import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import { BottomTabParamList } from '../../navigation/types';
import DetailsScreen from './DetailsScreen';
import AccountScreen from './AccountScreen';
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

function MainScreen() {
  return (
    <BottomTab.Navigator screenOptions={{
      tabBarInactiveTintColor: 'black',
      tabBarActiveTintColor: '#C15266',
      tabBarStyle: {
        position: 'absolute',
        borderTopColor: 'rgba(0, 0, 0, .2)',
      },
    }}>
      <BottomTab.Screen name="Home" component={HomeScreen} options={ ({ navigation }) => ({
        headerShown: false,
        title: "Home",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name="home" size={24} color={focused ? '#C15266' : 'black'} />
        )
      }) } />
      <BottomTab.Screen name="Details" component={DetailsScreen} options={ ({ navigation }) => ({
        headerShown: false,
        title: "Details",
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name="settings" size={24} color={focused ? '#C15266' : 'black'} />
        )
      }) } />
      <BottomTab.Screen name="Account" component={AccountScreen} options={ ({ navigation }) => ({
        headerShown: false,
        title: 'My Account',
        tabBarIcon: ({ focused, color }) => (
          <Ionicons name="md-person-circle-outline" size={24} color={focused ? '#C15266' : 'black'} />
        )
      }) } />
    </BottomTab.Navigator>
  );
}

export default MainScreen;