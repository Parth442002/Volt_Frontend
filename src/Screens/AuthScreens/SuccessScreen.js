import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

import AnimatedLottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";

const SuccessScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("HomeNavigator", { screen: "Home" });
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.crossX}
        onPress={() => navigation.goBack()}
      >
        <Entypo name="cross" size={50} color="black" />
      </TouchableOpacity>
      <AnimatedLottieView
        style={styles.confetti}
        autoPlay
        loop
        source={require(`../../../assets/lottieFiles/confetti.json`)}
      />
      <AnimatedLottieView
        autoPlay
        loop
        source={require(`../../../assets/lottieFiles/success.json`)}
      />
      <>
        <Text
          style={[{ paddingHorizontal: 30, paddingBottom: 20 }, styles.heading]}
        >
          You Signed Up Successfully !
        </Text>
      </>
    </View>
  );
};

export default SuccessScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  crossX: {
    position: "absolute",
    top: 30,
    left: 5,
  },
  confetti: {
    height: "100%",
    width: "100%",
  },
  heading: {
    position: "absolute",
    bottom: 90,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
