import { StyleSheet, Text, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DUMMY_SCREEN from "./screens/DUMMY_SCREEN.js";
import CircleProfile from "./components/LV2/UI/CircleProfile";

import { MaterialIcons } from "@expo/vector-icons";
import AddPostScreen from "./screens/AddPostScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: "center",
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#000",
        },
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="AddPost" component={AddPostScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000",
          borderTopWidth: 1,
          borderTopColor: "gray",
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeStack") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search";
          } else if (route.name === "Reel") {
            iconName = focused ? "ondemand-video" : "ondemand-video";
          } else if (route.name === "Shop") {
            iconName = focused ? "shopping-bag" : "shopping-bag";
          }
          return <MaterialIcons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name="HomeStack" component={MyStack} />
      <Tab.Screen name="Search" component={DUMMY_SCREEN} />
      <Tab.Screen name="Reel" component={DUMMY_SCREEN} />
      <Tab.Screen name="Shop" component={DUMMY_SCREEN} />
      <Tab.Screen
        name="Profile"
        component={DUMMY_SCREEN}
        options={{
          tabBarIcon: () => (
            <CircleProfile
              style={{
                width: 25,
                height: 25,
                borderWidth: 0,
              }}
              imageUri="https://i.pinimg.com/564x/2e/18/5b/2e185b71900d76cf3ec33434b0e59681.jpg"
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <MyTabs />
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
