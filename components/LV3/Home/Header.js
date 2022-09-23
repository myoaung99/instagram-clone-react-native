import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";

import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import IconButton from "../../LV2/Button/IconButton";
import Badge from "../../LV2/UI/Badge";

const Header = () => {
  return (
    <View style={styles.container}>
      <Pressable style={({ pressed }) => pressed && styles.pressed}>
        <Image
          style={styles.logo}
          source={require("../../../assets/ig-text-log.png")}
        />
      </Pressable>

      <View style={styles.iconContainer}>
        <IconButton>
          <Feather
            name="plus-square"
            size={20}
            color="white"
            style={styles.icon}
          />
        </IconButton>

        <IconButton>
          <Feather name="heart" size={20} color="white" style={styles.icon} />
        </IconButton>

        <IconButton>
          <Badge style={styles.badge}>11</Badge>
          <Ionicons
            name="ios-chatbubble-outline"
            size={20}
            color="white"
            style={styles.icon}
          />
        </IconButton>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 5,
  },
  badge: {
    left: 12,
    bottom: 18,
    width: 20,
    height: 18,
  },
  pressed: {
    opacity: 0.75,
  },
});