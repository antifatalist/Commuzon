import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MainScreen from "./screens/main";
import LoginScreen from "./screens/login";
import CreateAccountScreen from "./screens/createaccount";
import ForgotPasswordScreen from "./screens/forgotpassword";
import PasswordSentScreen from "./screens/passwordsent";
import AddItemScreen from "./screens/additem";
import AddProductScreen from "./screens/addproduct";
import AddListingScreen from "./screens/addlisting";
import MakeCommunityRequestScreen from "./screens/makecommunityrequest";
import { RootStackParamList } from "./navigation/types";
import { useFonts } from "expo-font";

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Merriweather-Black": require("./assets/fonts/Merriweather-Black.ttf"),
    "Merriweather-Regular": require("./assets/fonts/Merriweather-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }

  const onAddItem = (name: string) => {};

  const onCancel = () => {};

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateAccount"
          component={CreateAccountScreen}
          options={{ headerShown: true }}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{ headerShown: true, title: "Forgot Password" }}
        />
        <Stack.Screen
          name="PasswordSent"
          component={PasswordSentScreen}
          options={{ headerShown: true, title: "Password Sent!" }}
        />
        <Stack.Screen
          name="MainNav"
          component={MainScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddItem"
          component={AddItemScreen}
          options={{ headerShown: true, title: "Add Item" }}
        />
        <Stack.Screen
          name="AddProduct"
          component={AddProductScreen}
          options={{ headerShown: true, title: "Add Product" }}
        />
        <Stack.Screen
          name="AddListing"
          component={AddListingScreen}
          options={{ headerShown: true, title: "Add Listing" }}
        />
        <Stack.Screen
          name="MakeCommunityRequest"
          component={MakeCommunityRequestScreen}
          options={{ headerShown: true, title: "Make Community Request" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
