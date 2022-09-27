import { StyleSheet, Text, StatusBar } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DUMMY_SCREEN from "./screens/DUMMY_SCREEN.js";
import CircleProfile from "./components/LV2/UI/CircleProfile";

import { MaterialIcons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#fff",
        tabBarStyle: {
          position: "absolute",
          backgroundColor: "#000",
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={MyStack}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={DUMMY_SCREEN}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Post"
        component={DUMMY_SCREEN}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={DUMMY_SCREEN}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="shopping-bag" size={size} color={color} />
          ),
        }}
      />
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
