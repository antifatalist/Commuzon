import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { RootStackScreenProps } from "../../navigation/types";

function AuthScreen() {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"Auth">["navigation"]>();

  return (
    <View style={styles.startScreen}>
      <Text style={styles.mainLogo}>Commuzon</Text>
      <View style={styles.startScreenButton}>
        <Feather name="shopping-cart" size={48} color="white" />
        <Text style={styles.startScreenButtonText}>Find what you need</Text>
      </View>
      <View style={styles.startScreenButton}>
        <MaterialCommunityIcons name="store-alert" size={48} color="white" />
        <Text style={styles.startScreenButtonText}>List what you have</Text>
      </View>
      <Button
        title="Login"
        onPress={() =>
          stackNavigation.navigate("MainNav", {
            screen: "Home",
            params: undefined,
          })
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  startScreen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#C15266", //'#F78794'
  },
  mainLogo: {
    fontFamily: "sans-serif",
    fontWeight: "bold",
    color: "#FFFFFF",
    fontSize: 48,
    textShadowColor: "#666666",
    textShadowRadius: 3,
  },
  startScreenButton: {
    padding: 30,
    margin: 20,
    width: "70%",
    alignItems: "center",
    backgroundColor: "#E07075",
    borderRadius: 12,
  },
  startScreenButtonText: {
    color: "#FFFFFF",
    fontFamily: "Merriweather-Black",
    fontSize: 18,
  },
});

export default AuthScreen;
