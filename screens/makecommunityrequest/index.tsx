import React from "react";
import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RootStackScreenProps } from "../../navigation/types";
import axios from "axios";

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
    try {
      // 👇️ const data: CommunityRequest
      const { data, status } = await axios.post<CommunityRequestResponse>(
        "http://commuzon.com:5000/api/requests",
        {
          requesterId: 1, // TODO: fix
          description: enteredDescriptionText,
          addressees: enteredAddresseesText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Ikt5bGUiLCJpYXQiOjE2ODE2NzUwMDcsImV4cCI6MTY4MTY3NTkwN30.cK2tw1TU_OOKJO6CK-cm1EH61FE3hlrt_vlPtAG6oAk",
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
