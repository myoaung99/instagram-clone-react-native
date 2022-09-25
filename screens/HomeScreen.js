import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/LV3/Home/Header";
import Stories from "../components/LV3/Home/Stories";
import Post from "../components/LV3/Home/Post";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
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
