import { Tabs } from "expo-router";
import {Ionicons} from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs  screenOptions={{tabBarActiveBackgroundColor:"lightblue"}}>
      <Tabs.Screen
        name="index"
        options={{
          title: "HOME",
          tabBarIcon: ({ color, size,focused }) => (
            <Ionicons name={focused ? "home" : "home-outline"} color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: "ABOUT",
          tabBarIcon: ({ color, size,focused }) => (
            <Ionicons name="information-circle" color={color} size={size} />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "PROFILE",
          tabBarIcon: ({ color, size, focused }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}