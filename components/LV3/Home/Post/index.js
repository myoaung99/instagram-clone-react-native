import { View, Text } from "react-native";
import React from "react";
import PostHeader from "./PostHeader";
import { Divider } from "@rneui/themed";
import PostBody from "./PostBody";
import PostFooter from "./PostFooter";

const Post = ({ post }) => {
  return (
    <View style={{ marginBottom: 12 }}>
      <PostHeader post={post} />
      <PostBody post={post} />
      <PostFooter post={post} />
    </View>
  );
};

export default Post;
