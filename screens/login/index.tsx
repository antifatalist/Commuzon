import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RootStackScreenProps } from "../../navigation/types";
const login = require("../../api/auth");

function LoginScreen() {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"Login">["navigation"]>();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onLoginPress = async () => {
    const data = await login(username, password);
    alert(JSON.stringify(data, null, 4));
    stackNavigation.navigate("MainNav", {
      screen: "Home",
      params: undefined,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.logo}>
        <Text style={styles.logoText}>Commuzon</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter username or email"
          placeholderTextColor="#003f5c"
          onChangeText={(username) => setUsername(username)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity
        onPress={() => stackNavigation.navigate("ForgotPassword")}
      >
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={onLoginPress}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  logoText: {
    color: "#FFA5C0",
    fontFamily: "Merriweather-Black",
    fontSize: 60,
  },
  container: {
    flex: 1,
    backgroundColor: "#333333", //"#C15266",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    //alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    textAlign: "center",
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
    color: "#FFFFFF",
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFA5C0",
  },
  loginText: {},
});

export default LoginScreen;
