import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const PostBody = ({ post }) => {
  return (
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: post.imageUrl }} />
    </View>
  );
};

export default PostBody;

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    height: 400,
  },
  image: {
    flex: 1,
  },
});
