import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Feather from "@expo/vector-icons/Feather";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import type { RootStackScreenProps } from "../../navigation/types";

function LoginScreen() {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"Login">["navigation"]>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      {/* <Image style={styles.image} source={require("../../assets/log2.png")} /> */}
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Enter email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
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
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() =>
          stackNavigation.navigate("MainNav", {
            screen: "Home",
            params: undefined,
          })
        }
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );

  // const stackNavigation =
  //   useNavigation<RootStackScreenProps<"Login">["navigation"]>();

  // return (
  //   <View style={styles.startScreen}>
  //     <Text style={styles.mainLogo}>Commuzon</Text>
  //     <View style={styles.startScreenButton}>
  //       <Feather name="shopping-cart" size={48} color="white" />
  //       <Text style={styles.startScreenButtonText}>Find what you need</Text>
  //     </View>
  //     <View style={styles.startScreenButton}>
  //       <MaterialCommunityIcons name="store-alert" size={48} color="white" />
  //       <Text style={styles.startScreenButtonText}>List what you have</Text>
  //     </View>
  //     <Button
  //       title="Login"
  //       onPress={() =>
  //         stackNavigation.navigate("MainNav", {
  //           screen: "Home",
  //           params: undefined,
  //         })
  //       }
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C15266",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
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
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
  loginText: {},
});

// const styles = StyleSheet.create({
//   startScreen: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#C15266", //'#F78794'
//   },
//   mainLogo: {
//     fontFamily: "sans-serif",
//     fontWeight: "bold",
//     color: "#FFFFFF",
//     fontSize: 48,
//     textShadowColor: "#666666",
//     textShadowRadius: 3,
//   },
//   startScreenButton: {
//     padding: 30,
//     margin: 20,
//     width: "70%",
//     alignItems: "center",
//     backgroundColor: "#E07075",
//     borderRadius: 12,
//   },
//   startScreenButtonText: {
//     color: "#FFFFFF",
//     fontFamily: "Merriweather-Black",
//     fontSize: 18,
//   },
// });

export default LoginScreen;
