import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

/**
 * @param style Icon width+height
 * @param imageUri Image uri
 */

const CircleProfile = ({ style, imageUri }) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image
        style={styles.image}
        source={{
          uri: imageUri,
        }}
      />
    </View>
  );
};

export default CircleProfile;

const styles = StyleSheet.create({
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FF8501",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 50,
  },
});
