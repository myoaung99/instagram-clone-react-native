import { Pressable, StyleSheet } from "react-native";
import React from "react";

const Button = ({ children, style, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [style, styles.button, pressed && styles.pressed]}
    >
      {children}
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    position: "relative",
  },
  pressed: {
    opacity: 0.5,
  },
});
