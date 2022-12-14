import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Button from "../../../LV2/Button/Button";
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

      <Button>
        <Entypo name="dots-three-horizontal" size={24} color="white" />
      </Button>
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
    paddingVertical: 3,
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileName: {
    color: "white",
  },
  imageContainer: {
    width: 35,
    height: 35,
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
