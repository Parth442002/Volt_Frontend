import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const AuthButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <View style={styles.main}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#FF8C32",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: "75%",
    minWidth: "50%",
  },
  main: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#FF8C32",
  },
  title: {
    fontSize: 25,
    color: "white",
  },
});
