import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useState, useEffect } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  const [animating, setAnimating] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setAnimating(false);
      //Check if user_id is set or not
      //If not then send for Authentication
      //else send to Home Screen

      AsyncStorage.getItem('accessToken').then((value) =>
      navigation.replace(
          value === null ? 'AuthStack' : 'MainStack'
        ),
       );
      navigation.replace("AuthStack");
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ height: 300, width: 300 }}>
        <LottieView
          autoPlay={true}
          loop={true}
          source={require(`../../assets/lottieFiles/Logo.json`)}
        />
      </View>
      <Text style={styles.companyName}>Volt Energy</Text>
      <Text style={styles.tagline}>
        Changing the world {"\n"}one charge at a time
      </Text>
      <Text style={styles.below}>Created with ❤️ by humans </Text>
    </View>
  );
};

export default SplashScreen;

const WINDOW_WIDTH = Dimensions.get("window").width;
const WINDOW_HEIGHT = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  companyName: {
    fontSize: 25,
    marginVertical: 30,
    fontWeight: "bold",
    fontStyle: "italic",
  },
  tagline: {
    fontSize: 18,
    fontWeight: "600",
    fontStyle: "italic",
  },
  below: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    fontSize: 20,
  },
});
