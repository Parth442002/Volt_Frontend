import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../Screens/SplashScreen';
import AuthNavigator from './AuthNavigator'
import HomeTabNavigator from './HomeTabNavigator'


const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
      <Stack.Navigator
        initialRouteName='SplashScreen'
        >
          <Stack.Screen
            name="SplashScreen"
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AuthStack"
            component={AuthNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='HomeNavigator'
            component={HomeTabNavigator}
            options={{headerShown:false}}
          />
      </Stack.Navigator>
  );
}

export default RootNavigator


/*
<Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="MainStack"
            component={HomeScreen}
            options={{headerShown: false}}
          />
*/