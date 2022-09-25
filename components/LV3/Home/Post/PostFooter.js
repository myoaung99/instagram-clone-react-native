import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import IconButton from "../../../LV2/Button/IconButton";

const PostFooter = ({ post }) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <IconButton>
            <Feather name="heart" size={24} color="white" style={styles.icon} />
          </IconButton>

          <IconButton>
            <Feather
              name="plus-square"
              size={24}
              color="white"
              style={styles.icon}
            />
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
        <Text style={styles.likeCount}>
          {post.likes} <Text>likes</Text>
        </Text>

        <View style={{ marginTop: 4 }}>
          <Text style={{ color: "white", fontWeight: "600" }}>
            {post.user}
            <Text style={{ color: "white", fontWeight: "400" }}>
              {" "}
              {post.caption}
            </Text>
          </Text>
        </View>

        {!!post.comments?.length && (
          <Text style={{ color: "gray", marginTop: 6 }}>
            {post.comments?.length > 1
              ? `View all ${post.comments.length} comments`
              : `View ${post.comments.length} comment`}
          </Text>
        )}

        {!post.comments?.length && (
          <Text style={{ color: "gray", marginTop: 6 }}>No comment</Text>
        )}

        {post.comments?.map((cmt) => (
          <View>
            <Text style={{ color: "white", fontWeight: "600", marginTop: 6 }}>
              {cmt.user}
              <Text style={{ color: "white", fontWeight: "400" }}>
                {" "}
                {cmt.comment}
              </Text>
            </Text>
          </View>
        ))}
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
    fontWeight: "600",
  },
  cmtName: {
    color: "white",
  },
  cmtText: {
    color: "white",
  },
});
