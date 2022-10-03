import React, {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {View, TextInput, StyleSheet, Image, Text, Pressable} from "react-native";
import Button from "../components/LV2/Button/Button";
import {Feather} from "@expo/vector-icons";
import * as ImagePicker from 'expo-image-picker';
import {Divider} from "@rneui/themed";
import {useController, useForm, Controller} from "react-hook-form";

const AddPostScreen = ({navigation, route}) => {
    const [image, setImage] = useState('');
    const {control, handleSubmit} = useForm();

    useLayoutEffect(() => {
        if (image) {
            navigation.setOptions({
                headerRight: () => {
                    return <Button onPress={handleSubmit(onSubmit)}>
                        <Feather
                            name="check"
                            size={24}
                            color="white"
                            style={styles.icon}
                        />
                    </Button>
                }
            });
        }
    }, [image]);

    useLayoutEffect(() => {
        pickUploadPhoto().then();
    }, [])

    const onSubmit = (data) => {
        const formData = {
            ...data,
            imageUrl: image
        }
        console.log(formData)
    }

    const pickUploadPhoto = useCallback(async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1.2],
            quality: 1,
        });

        if (result.cancelled) return

        setImage(result.uri);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.postContentBox}>
                {image
                    ? <Button style={styles.noImageBox} onPress={pickUploadPhoto}>
                        <Image style={styles.image}
                               source={{uri: image}}
                        />
                    </Button>
                    : <Button style={styles.noImageBox} onPress={pickUploadPhoto}>
                        <Text style={styles.noImageText}>Select Image</Text>
                    </Button>}

                <Controller
                    control={control}
                    render={({field: {onChange, value}}) => (
                        <TextInput
                            onChangeText={onChange}
                            value={value}
                            style={styles.input}
                            multiline={true}
                            numberOfLines={3}
                            textAlignVertical="top"
                            placeholder="What is in your mind?"
                        />
                    )}
                    name="content"
                />
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
        flex: 1,
        width: '100%'
    },
    image: {
        width: 100,
        height: 100,
        resizeMode: "cover",
        borderRadius: 5
    },
    noImageBox: {
        width: 100,
        height: 100,
        backgroundColor: '#dcdedc',
        borderWidth: 1,
        borderColor: '#bababa',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    noImageText: {
        fontSize: 10,
        color: '#888a88',
    },
});
