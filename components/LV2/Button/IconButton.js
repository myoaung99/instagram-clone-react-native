import { Pressable, StyleSheet } from "react-native";
import React from "react";

const IconButton = ({ children, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, styles.button, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    position: "relative",
  },
  pressed: {
    opacity: 0.75,
  },
});
