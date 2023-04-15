import React from "react";
import { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import type { RootStackScreenProps } from "../../navigation/types";
import axios from "axios";

const AddProductScreen = () => {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"AddProduct">["navigation"]>();

  const [enteredProductNameText, setEnteredProductNameText] = useState("");
  const [enteredProviderText, setEnteredProviderText] = useState("");
  const [enteredProducerText, setEnteredProducerText] = useState("");

  function productNameInputHandler(enteredText: string) {
    setEnteredProductNameText(enteredText);
  }

  function providerInputHandler(enteredText: string) {
    setEnteredProviderText(enteredText);
  }

  function producerInputHandler(enteredText: string) {
    setEnteredProducerText(enteredText);
  }

  type ProductResponse = {
    name: string;
    provider: string;
    producer: string;
  };

  async function createProduct() {
    try {
      // 👇️ const data: Product
      const { data, status } = await axios.post<ProductResponse>(
        "http://143.42.114.251:3000/product",
        {
          name: enteredProductNameText,
          provider: enteredProviderText,
          producer: enteredProducerText,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
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

  const onAddProductPress = () => {
    createProduct();
    stackNavigation.navigate("MainNav", {
      screen: "Home",
      params: {
        itemName: enteredProductNameText,
        provider: enteredProviderText,
        producer: enteredProducerText,
      },
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
        placeholder="Enter product name"
        onChangeText={productNameInputHandler}
        value={enteredProductNameText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter provider"
        onChangeText={providerInputHandler}
        value={enteredProviderText}
      />
      <TextInput
        style={styles.textInput}
        placeholder="Enter producer"
        onChangeText={producerInputHandler}
        value={enteredProducerText}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Cancel" onPress={onCancelPress} color="#f31282" />
        </View>
        <View style={styles.button}>
          <Button
            title="Add Product"
            onPress={onAddProductPress}
            color="#b180f0"
          />
        </View>
      </View>
    </View>
  );
};

export default AddProductScreen;

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
