import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";

import RootNavigator from "./src/Navigation/RootNavigator";

//This is the Entry Point to the React Native Application

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
