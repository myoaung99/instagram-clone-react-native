import { View, Text, SafeAreaView, StyleSheet, ScrollView } from "react-native";
import React from "react";
import Header from "../components/LV3/Home/Header";
import Stories from "../components/LV3/Home/Stories";
import Post from "../components/LV3/Home/Post";
import { POSTS } from "../data/posts";

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Header />
      <Stories />
      <>
        {POSTS.map((post) => (
          <Post post={post} />
        ))}
      </>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
});
