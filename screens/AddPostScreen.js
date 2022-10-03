import React, {useLayoutEffect} from "react";
import {View, Text, StyleSheet} from "react-native";
import IconButton from "../components/LV2/Button/IconButton";
import { Feather } from "@expo/vector-icons";

const AddPostScreen = ({navigation, route}) => {
    useLayoutEffect(()=>{
    navigation.setOptions({
        headerRight: ()=>{
            return <IconButton>
                <Feather
                    name="plus-square"
                    size={24}
                    color="white"
                    style={styles.icon}
                />
            </IconButton>
        }
    });
    },  []);


  return (
    <View>
      <Text>AddPostScreen</Text>
    </View>
  );
};

export default AddPostScreen;

const styles = StyleSheet.create({
    icon: {
        padding: 10,
    },
});
