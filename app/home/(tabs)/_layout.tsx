import { Colors } from "@/constants";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
        tabBarStyle: {
          backgroundColor: Colors.BG_DARK,
          borderTopWidth: 0,
          height: 64,
          padding: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontFamily: "Montserrat",
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <FontAwesome
              name="bicycle"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
