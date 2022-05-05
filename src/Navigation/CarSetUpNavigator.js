import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import VehicleTypeScreen from "../Screens/SetUpScreen/VehicleTypeScreen"

const Stack = createNativeStackNavigator();

function CarSetUpStack() {
  return (
    <Stack.Navigator initialRouteName="VehicleTypeScreen">
      <Stack.Screen
        name="VehicleTypeScreen"
        component={VehicleTypeScreen}
        options={{ headerShown: false }}
      />
      {/**
       <Stack.Screen
        name="CompanySelectScreen"
        component={CompanySelectScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="VehicleSelectScreen"
        component={VehicleSelectScreen}
        options={{ headerShown: false }}
      />
       */}
    </Stack.Navigator>
  );
}

export default CarSetUpStack;