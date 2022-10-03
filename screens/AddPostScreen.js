import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {View, TextInput, StyleSheet, Image, Button} from "react-native";
import IconButton from "../components/LV2/Button/IconButton";
import {Feather} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {Divider} from "@rneui/themed";
import { useForm } from "react-hook-form";


const AddPostScreen = ({navigation, route}) => {
    const [image, setImage] = useState(null);
    // const {control, formState: {errors}, handleSubmit} = useForm();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton>
                    <Feather name="check"
                             size={24}
                             color="white"
                             style={styles.icon}/>
                </IconButton>
            }
        });
    }, []);

    // useLayoutEffect(()=>{
    //     pickUploadPhoto();
    // }, [])

    const Input = ({name, control})=>{
        return <TextInput style={styles.input} multiline={true}
                          numberOfLines={3}
                          textAlignVertical="top"
                          placeholder="What is in your mind?"/>
    }

    const pickUploadPhoto = useCallback(async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1.2],
            quality: 1,
        });

        console.log(result);

        if (!result.cancelled) {
            setImage(result.uri);
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.postContentBox}>
                {<Image style={styles.image}
                        source={{uri: "file:///data/user/0/host.exp.exponent/cache/ImagePicker/c2c58236-3539-4a71-84f5-65e07a77159d.jpeg"}}/>}
                <Input name="content" />
            </View>

            <Divider/>

        </View>

    );
};

export default AddPostScreen;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    postContentBox: {
        flexDirection: 'row',
        marginBottom: 10
    },

    icon: {
        padding: 10,
    },
    input: {
        marginLeft: 10,
        padding: 6,

        width: '100%'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 5
    }
});
