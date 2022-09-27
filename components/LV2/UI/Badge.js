import { View, Text, StyleSheet } from "react-native";
import React from "react";

/**
 * @param {children} param0 Badge content
 * @param {style} param1 Badge position
 * @returns Badge component
 */

const Badge = ({ children, style }) => {
  return (
    <View style={[styles.unreadBadge, style]}>
      <Text style={styles.unreadBadgeText}>{children}</Text>
    </View>
  );
};

export default Badge;

const styles = StyleSheet.create({
  unreadBadge: {
    position: "absolute",
    zIndex: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FF3250",
    paddingVertical: 1,
    paddingHorizontal: 3,
    borderRadius: 24,
  },
  unreadBadgeText: {
    fontSize: 10,
    color: "white",
    fontWeight: "600",
  },
});
