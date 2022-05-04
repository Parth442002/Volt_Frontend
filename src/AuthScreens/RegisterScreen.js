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
import {UserSignUp} from "../services/user.services"
import AsyncStorage from "@react-native-async-storage/async-storage";



const RegisterScreen = ({ navigation }) => {
  const [email,setEmail]=useState()
  const [mobile,setMobile]=useState()
  const [password,setPassword]=useState()
  const [passwordvisible, setPasswordvisible] = useState(false);

  const onSubmit=async()=>{
    const postData={
        email:email,
        password1:password,
        password2:password,
        mobile:mobile,
    }
    console.log(postData)
    console.log("Posted the Data")
    try {
        const response = await UserSignUp(postData);
        console.log(response.data);
        const accessToken=await response.data.access_token
        const refreshToken=await response.data.refresh_token
        console.log(accessToken)
        console.log(refreshToken)
        await AsyncStorage.setItem("accessToken",accessToken)
        await AsyncStorage.setItem("refreshToken",refreshToken)
        navigation.navigate("SuccessScreen")
      } catch (err) {
        console.log("ERROR");
        console.log(err)
        navigation.navigate("ErrorScreen")
      }
    }

  const InputLabel = (props) => {
    return <Text style={{ fontSize: 20 }}>{props.name}</Text>;
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
            value={email}
            onChangeText={(value)=>setEmail(value)}
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
            value={mobile}
            onChangeText={text => setMobile(text)}
            style={styles.input}
            label={<InputLabel name="Phone" />}
            mode={"outlined"}
            left={<TextInput.Icon name="phone" />}
            outlineColor="#FF8C32"
            activeOutlineColor="blue"
            keyboardType="number-pad"
          />
          <TextInput
            value={password}
            onChangeText={text => setPassword(text)}
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
            onPress={() =>onSubmit()}
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
