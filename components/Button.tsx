import React from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

interface Props {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  iconProps: ButtonIconProps;
}

interface ButtonIconProps {
  iconName?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconSize?: number;
  iconColor?: string;
}

const Button = (props: Props, iconProps: ButtonIconProps) => {
  const { title, onPress, backgroundColor } = props;
  const { iconName, iconSize, iconColor } = iconProps;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{ ...styles.container, backgroundColor }}
    >
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <MaterialCommunityIcons
          style={styles.icon}
          size={48}
          name="store-alert"
        />
        <Text style={{ ...styles.text }}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  text: {
    alignItems: "center",
    color: "#FFFFFF",
    fontFamily: "Merriweather-Black",
    fontSize: 18,
  },
});

export default Button;
