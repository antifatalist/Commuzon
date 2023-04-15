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

function PasswordSentScreen() {
  const stackNavigation =
    useNavigation<RootStackScreenProps<"PasswordSent">["navigation"]>();

  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        If the email address you entered exists in our records, an email address
        containing your password will be sent to you.
      </Text>
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
  message: {
    color: "#FFFFFF",
  },
});

export default PasswordSentScreen;
