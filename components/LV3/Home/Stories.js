import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { USERS } from "../../../data/users";
import { Divider } from "@rneui/themed";
import CircleProfile from "../../LV2/UI/CircleProfile";

const Stories = () => {
  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {USERS.map((user) => (
          <View style={styles.story} key={user.id}>
            <CircleProfile
              style={{ width: 70, height: 70 }}
              imageUri={user.image}
            />
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>
                {user.username.length > 6
                  ? user.username.slice(0, 5).toLocaleLowerCase()
                  : user.username}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
      <Divider width={1} color="gray" />
    </View>
  );
};

export default Stories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 3,
  },
  story: {
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  imageContainer: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#FF8501",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    borderRadius: 50,
  },
  nameContainer: {
    marginTop: 5,
  },
  nameText: {
    color: "gray",
  },
});
