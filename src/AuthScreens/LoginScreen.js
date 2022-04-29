import { StyleSheet, Text, View,TouchableWithoutFeedback,TouchableOpacity} from 'react-native'
import React, { useState } from 'react'
import AnimatedLottieView from 'lottie-react-native';

import { Button, TextInput } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';

import AuthButton from '../Components/AuthButton';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'


const LoginScreen = ({navigation}) => {
  const [text,setText]=useState('')
  const [passwordvisible,setPasswordvisible]=useState(false)


  const InputLabel=(props)=>{
    return(
      <Text style={{fontSize:20}}>{props.name}</Text>
    )
  }
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
        <Text style={styles.heading}>Welcome Back! We are {"\n"}Delighted to have you here</Text>
        <View style={styles.form}>
          <TextInput
              style={styles.input}
              label={<InputLabel name='Email'/>}
              mode={'outlined'}
              left={<TextInput.Icon name="email" />}
          />
          <TextInput
              style={styles.input}
              label={<InputLabel name='Password'/>}
              mode={'outlined'}
              secureTextEntry={passwordvisible}
              left={<TextInput.Icon name="lock"/>}
              right={
                <TextInput.Icon
                  name={passwordvisible ? "eye" : "eye-off"}
                  onPress={() => setPasswordvisible(!passwordvisible)}
                />
              }
          />
          <View style={styles.grpText}>
            <Text style={styles.innertext}>Don't Have an Account?</Text>
            <TouchableOpacity
              onPress={()=>navigation.navigate('RegisterScreen')}
            >
              <Text style={styles.innertextbutton} >Click Here</Text>
            </TouchableOpacity>
          </View>
          <AuthButton
            title='Login'
            onPress={()=>navigation.navigate('Slider3Screen')}
          />
        </View>
    </KeyboardAwareScrollView>
    </TouchableWithoutFeedback>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  animatedTop:{
    position:'relative',
    top:0,
    height:200,
    width:200,
  },
  heading:{
    marginVertical:5,
    textAlign:'left',
    fontSize:25,
    fontStyle:'italic'
  },
  form:{
    marginVertical:5,
    padding:5,
    borderRadius:10,
    width:'75%',
    justifyContent:'center',
    alignItems:'center'
  },
  input:{
    backgroundColor:'white',
    fontSize:15,
    width:'100%',
    marginVertical:10,
  },
  grpText:{
    flexDirection:'row',
    marginVertical:6,
  },
  innertext:{
    fontSize:15,
  },
  innertextbutton:{
    fontSize:15,
    color:'orange',
    marginLeft:5,
    fontStyle:'italic',
    fontWeight:'bold'
  }
})