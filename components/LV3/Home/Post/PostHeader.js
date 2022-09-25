import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import IconButton from "../../../LV2/Button/IconButton";
import { Entypo } from "@expo/vector-icons";

const PostHeader = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: post.profile_picture }} />
        </View>
        <Text style={styles.profileName}>{post.user}</Text>
      </View>

      <IconButton>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </IconButton>
    </View>
  );
};

export default PostHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    color: "white",
  },
  imageContainer: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FF8501",
    margin: 6,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 50,
  },
});
