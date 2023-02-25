import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/main';
import AuthScreen from './screens/auth';
import AddItemScreen from './screens/additem';
import { RootStackParamList } from './navigation/types';
import { useFonts } from 'expo-font';

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Merriweather-Black': require('./assets/fonts/Merriweather-Black.ttf'),
    'Merriweather-Regular': require('./assets/fonts/Merriweather-Regular.ttf')
  });
  if (!fontsLoaded) {
    return null;
  }

  const onAddItem = (name: string) => {

  };

  const onCancel = () => {

  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Auth" component={AuthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MainNav" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddItem" component={AddItemScreen} options={{ headerShown: true, title: "Add Item" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}