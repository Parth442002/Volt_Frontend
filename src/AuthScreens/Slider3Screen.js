import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import AnimatedLottieView from "lottie-react-native";

import { FontAwesome5 } from "@expo/vector-icons";
const Slider3Screen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={styles.animatedTop}
        autoPlay
        loop={true}
        source={require(`../../assets/lottieFiles/slide3.json`)}
      />
      <Text style={styles.heading}>Slider3Screen</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor {"\n"} incididunt ut labore et
      </Text>

      <TouchableOpacity
        style={styles.prevarrow}
        onPress={() => navigation.navigate("Slider2Screen")}
      >
        <FontAwesome5 name="arrow-left" size={50} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("RegisterScreen")}
      >
        <Text style={styles.buttontext}>Continue to Signup! </Text>
        <FontAwesome5 name="arrow-right" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Slider3Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedTop: {
    position: "absolute",
    top: 20,
    height: 250,
    width: 250,
  },
  heading: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: 30,
    fontStyle: "italic",
  },
  text: {
    fontSize: 20,
    marginVertical: 20,
    marginHorizontal: 10,
  },
  prevarrow: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: 20,
    bottom: 20,
    height: 70,
    width: 70,
    borderRadius: 70,
    backgroundColor: "#FF8C32",
  },
  button: {
    position: "relative",
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
    padding: 20,
    borderRadius: 15,
    fontSize: 20,
    backgroundColor: "#FF8C32",
  },
  buttontext: {
    fontSize: 20,
    marginRight: 10,
    color: "white",
  },
});
