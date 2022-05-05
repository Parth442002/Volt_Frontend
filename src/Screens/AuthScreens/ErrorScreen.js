import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";

import AnimatedLottieView from "lottie-react-native";
import { Entypo } from "@expo/vector-icons";

const ErrorScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.goBack();
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
      <View style={{ height: "75%", width: "75%" }}>
        <AnimatedLottieView
          style={styles.error}
          autoPlay
          loop
          source={require(`../../../assets/lottieFiles/error.json`)}
        />
      </View>
      <>
        <Text
          style={[{ paddingHorizontal: 30, paddingBottom: 20 }, styles.heading]}
        >
          There has been an error :(
        </Text>
      </>
    </View>
  );
};

export default ErrorScreen;

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
  heading: {
    position: "absolute",
    bottom: 90,
    marginBottom: 50,
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
  },
});
