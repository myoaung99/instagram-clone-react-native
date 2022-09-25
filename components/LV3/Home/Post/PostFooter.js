import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "../../../LV2/Button/IconButton";

const PostFooter = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IconButton>
            <Feather
              name="plus-square"
              size={24}
              color="white"
              style={styles.icon}
            />
          </IconButton>

          <IconButton>
            <Feather name="heart" size={24} color="white" style={styles.icon} />
          </IconButton>

          <IconButton>
            <Ionicons
              name="ios-chatbubble-outline"
              size={24}
              color="white"
              style={styles.icon}
            />
          </IconButton>
        </View>

        <View>
          <IconButton>
            <MaterialCommunityIcons
              style={styles.icon}
              name="bookmark-outline"
              size={28}
              color="white"
            />
          </IconButton>
        </View>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.likeCount}>1203 likes</Text>
        <Text style={styles.caption}>Caption</Text>

        <Text style={styles.cmtText}>
          <Text style={styles.cmtName}>mr.mouse</Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit!
        </Text>
      </View>
    </View>
  );
};

export default PostFooter;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 6,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    padding: 10,
  },
  contentContainer: {
    paddingHorizontal: 14,
  },
  likeCount: {
    color: "white",
  },
  caption: {
    color: "white",
  },
  cmtName: {
    color: "white",
  },
  cmtText: {
    color: "white",
  },
});
