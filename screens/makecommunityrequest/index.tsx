import React from "react";
import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RootStackScreenProps } from "../../navigation/types";
import axios from "axios";
import * as SecureStore from "expo-secure-store";

const MakeCommunityRequestScreen = () => {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"MakeCommunityRequest">["navigation"]>();

  const [enteredDescriptionText, setEnteredDescriptionText] = useState("");
  const [enteredAddresseesText, setEnteredAddresseesText] = useState("");

  function descriptionInputHandler(enteredText: string) {
    setEnteredDescriptionText(enteredText);
  }

  function addresseesInputHandler(enteredText: string) {
    setEnteredAddresseesText(enteredText);
  }

  type CommunityRequestResponse = {
    description: string;
    addressees: string;
  };

  async function postCommunityRequest() {
    const accessToken = await SecureStore.getItemAsync("access_token");
    try {
      // 👇️ const data: CommunityRequest
      const { data, status } = await axios.post<CommunityRequestResponse>(
        "http://commuzon.com:5000/api/communityrequests",
        {
          requesterId: 1, // TODO: fix
          description: enteredDescriptionText,
          addressees: enteredAddresseesText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + accessToken,
          },
        }
      );

      console.log(JSON.stringify(data, null, 4));

      console.log(status);

      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log("error message: ", error.message);
        // 👇️ error: AxiosError<any, any>
        return error.message;
      } else {
        console.log("unexpected error: ", error);
        return "An unexpected error occurred";
      }
    }
  }

  const onSubmitRequestPress = () => {
    postCommunityRequest();
    stackNavigation.navigate("MainNav", {
      screen: "Home",
    });
  };

  const onCancelPress = () => {
    stackNavigation.navigate("MainNav", {
      screen: "Home",
    });
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter description"
        onChangeText={descriptionInputHandler}
        value={enteredDescriptionText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter addressees"
        onChangeText={addresseesInputHandler}
        value={enteredAddresseesText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancelPress} color="#f31282" />
        </View>
        <View style={styles.button}>
          <Button
            title="Submit Request"
            onPress={onSubmitRequestPress}
            color="#b180f0"
          />
        </View>
      </View>
    </View>
  );
};

export default MakeCommunityRequestScreen;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFFFFF",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#333333", // "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderRadius: 6,
    width: "100%",
    padding: 12,
    margin: 5,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
    margin: 5,
  },
  button: {
    width: 100,
    marginHorizontal: 15,
    margin: 5,
  },
});
