import * as React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Slide1Screen from "../Screens/AuthScreens/Slider1Screen";
import Slide2Screen from "../Screens/AuthScreens/Slider2Screen";
import Slide3Screen from "../Screens/AuthScreens/Slider3Screen";
import RegisterScreen from "../Screens/AuthScreens/RegisterScreen";
import LoginScreen from "../Screens/AuthScreens/LoginScreen";
import SuccessScreen from "../Screens/AuthScreens/SuccessScreen";
import ErrorScreen from "../Screens/AuthScreens/ErrorScreen";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Slider1Screen">
      <Stack.Screen
        name="Slider1Screen"
        component={Slide1Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Slider2Screen"
        component={Slide2Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Slider3Screen"
        component={Slide3Screen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterScreen"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SuccessScreen"
        component={SuccessScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ErrorScreen"
        component={ErrorScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;

/*
<Stack.Screen
          name="AuthenticationScreen"
          component={AuthenticationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OtpScreen"
          component={OtpScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AuhenticateSuccessScreen"
          component={AuthenticateSuccessScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="EmailScreen"
          component={EmailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
        name="PhoneScreen"
        component={PhoneScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OtpSentScreen"
        component={OtpSentScreen}
        options={{headerShown: false}}
      />

*/
