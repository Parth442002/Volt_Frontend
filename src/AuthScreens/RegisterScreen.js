import {
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import AnimatedLottieView from "lottie-react-native";

import { Button, TextInput } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import AuthButton from "../Components/AuthButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const RegisterScreen = ({ navigation }) => {
  const [text, setText] = useState("");
  const [passwordvisible, setPasswordvisible] = useState(false);

  const InputLabel = (props) => {
    return <Text style={{ fontSize: 20 }}>{props.name}</Text>;
  };

  const Visibilityicon = (props) => {
    return (
      <TouchableOpacity onPress={setPasswordvisible(!passwordvisible)}>
        <TextInput.Icon name="eye" />
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback>
      <KeyboardAwareScrollView
        resetScrollToCoords={{ x: 0, y: 0 }}
        contentContainerStyle={styles.container}
        scrollEnabled={false}
      >
        <AnimatedLottieView
          style={styles.animatedTop}
          autoPlay
          loop={true}
          source={require(`../../assets/lottieFiles/Logo.json`)}
        />
        <Text style={styles.heading}>
          Welcome! We are {"\n"}Delighted to have you here
        </Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            label={<InputLabel name="Email" />}
            mode={"outlined"}
            left={<TextInput.Icon name="email" />}
            underlineColor="#FF8C32"
            outlineColor="#FF8C32"
            activeOutlineColor="blue"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            label={<InputLabel name="Phone" />}
            mode={"outlined"}
            left={<TextInput.Icon name="phone" />}
            outlineColor="#FF8C32"
            activeOutlineColor="blue"
            keyboardType="number-pad"
          />
          <TextInput
            style={styles.input}
            label={<InputLabel name="Password" />}
            mode={"outlined"}
            secureTextEntry={passwordvisible}
            outlineColor="#FF8C32"
            activeOutlineColor="blue"
            keyboardType="visible-password"
            left={<TextInput.Icon name="lock" />}
            right={
              <TextInput.Icon
                name={passwordvisible ? "eye" : "eye-off"}
                onPress={() => setPasswordvisible(!passwordvisible)}
              />
            }
          />
          <View style={styles.grpText}>
            <Text style={styles.innertext}>Already Have an Account?</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("LoginScreen")}
            >
              <Text style={styles.innertextbutton}>Click Here</Text>
            </TouchableOpacity>
          </View>
          <AuthButton
            title="Register"
            onPress={() => navigation.navigate("SuccessScreen")}
          />
        </View>
      </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedTop: {
    position: "relative",
    top: 0,
    height: 150,
    width: 200,
  },
  heading: {
    marginVertical: 5,
    textAlign: "left",
    fontSize: 25,
    fontStyle: "italic",
  },
  form: {
    marginVertical: 5,
    padding: 5,
    borderRadius: 10,
    width: "75%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    fontSize: 15,
    width: "100%",
    marginVertical: 10,
  },
  grpText: {
    flexDirection: "row",
    marginVertical: 6,
  },
  innertext: {
    fontSize: 15,
  },
  innertextbutton: {
    fontSize: 15,
    color: "orange",
    marginLeft: 5,
    fontStyle: "italic",
    fontWeight: "bold",
  },
});
