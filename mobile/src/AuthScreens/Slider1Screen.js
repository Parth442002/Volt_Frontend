import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AnimatedLottieView from 'lottie-react-native'
import { FontAwesome5 } from '@expo/vector-icons';

const Slider1Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <AnimatedLottieView
        style={styles.animatedTop}
        autoPlay
        loop={true}
        source={require(`../../assets/lottieFiles/slide1.json`)}
      />
      <Text style={styles.heading}>Slider1Screen</Text>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor {"\n"} incididunt ut labore et
      </Text>
      <TouchableOpacity
        style={styles.nextarrow}
        onPress={()=>navigation.navigate('Slider2Screen')}
      >
        <FontAwesome5 name="arrow-right" size={50} color="white" />
      </TouchableOpacity>
    </View>
  )
}

export default Slider1Screen

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent:'center',
    alignItems:"center"
  },
  animatedTop:{
    position:'absolute',
    top:0,
    height:250,
    width:250,
  },
  heading:{
    marginVertical:10,
    textAlign:'center',
    fontSize:30,
    fontStyle:'italic'
  },
  text:{
    fontSize:20,
    marginVertical:20,
  },
  nextarrow:{
    alignItems:'center',
    justifyContent:'center',
    position:"absolute",
    right: 20,
    bottom: 20,
    height:70,
    width:70,
    borderRadius:70,
    backgroundColor:'#FF8C32',
  }

})