import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { usestate } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

import HomeScreen from "../Screens/HomeScreen";
import DiscoverScreen from "../Screens/DiscoverScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import PrototypeScreen from "../Screens/PrototypeScreen";

import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const LightningButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        top: -30,
        justifyContent: "center",
        alignItems: "center",
        ...styles.shadow,
      }}
      onPress={onPress}
    >
      <View
        style={{
          width: 70,
          height: 70,
          borderRadius: 35,
          backgroundColor: "#FF8C32",
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

function HomeTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: "#ffffff",
          borderRadius: 20,
          height: 70,
          ...styles.shadow,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <AntDesign
                name="home"
                size={25}
                color="black"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <AntDesign
                name="earth"
                size={25}
                color="black"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              >
                Discover
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Charge"
        component={PrototypeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={50}
              color="black"
              style={{
                width: 50,
                height: 50,
                color: "white",
              }}
            />
          ),
          tabBarButton: (props) => <LightningButton {...props} />,
        }}
      />

      <Tab.Screen
        name="Liked"
        component={PrototypeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <AntDesign
                name="hearto"
                size={25}
                color="black"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              >
                Liked
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                top: 15,
              }}
            >
              <Feather
                name="user"
                size={25}
                color="black"
                style={{
                  width: 25,
                  height: 25,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              />
              <Text
                style={{
                  fontSize: 15,
                  marginTop: 5,
                  color: focused ? "#FF8C32" : "#748c94",
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default HomeTabNavigator;

/*
({focused})=>(
            <View style={{alignItems:'center',justifyContent:'center',top:15}}>
              <AntDesign name="home" size={25} color="black"
              style={{
                width:25,
                height:25,
                tintColor:focused? '#FF8C32':'#748c94'
              }}
              />
              <Text style={{fontSize:15,marginTop:5}}>Home</Text>
            </View>
          )
        }}
*/
