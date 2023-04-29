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
import { createUser } from "../../api/auth";

function CreateAccountScreen() {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"CreateAccount">["navigation"]>();

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onCreateAccountPress = async () => {
    // TODO: Validate email address if it exists
    // TODO: Validate username
    // TODO: Validate password
    if (password != password2) {
      alert("Password fields don't match.");
      return;
    }
    await createUser(email, username, password);
    stackNavigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../../assets/log2.png")} /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter email (Not Required)"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter username"
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
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Confirm password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password2) => setPassword2(password2)}
        />
      </View>
      <TouchableOpacity
        style={styles.createAccountBtn}
        onPress={onCreateAccountPress}
      >
        <Text style={styles.createAccountText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#333333",
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
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  createAccountBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FFA5C0",
  },
  createAccountText: {},
});

export default CreateAccountScreen;
