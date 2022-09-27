import { View, Text } from "react-native";
import React from "react";

const DUMMY_SCREEN = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black",
      }}
    >
      <Text style={{ color: "white" }}>This is DUMMY SCREEB</Text>
    </View>
  );
};

export default DUMMY_SCREEN;
