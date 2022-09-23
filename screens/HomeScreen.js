import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import Header from "../components/LV3/Home/Header";
import Stories from "../components/LV3/Home/Stories";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
