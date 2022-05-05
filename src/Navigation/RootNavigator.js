import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SplashScreen from "../Screens/SplashScreen";
import AuthNavigator from "./AuthNavigator";
import HomeTabNavigator from "./HomeTabNavigator";
import CarSetUpNavigator from "./CarSetUpNavigator";

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="AuthStack"
        component={AuthNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CarSetUpNavigator"
        component={CarSetUpNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeNavigator"
        component={HomeTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
