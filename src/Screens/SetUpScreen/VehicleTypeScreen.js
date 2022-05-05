import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const VehicleTypeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.topText}>VehicleTypeScreen</Text>
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text>Car</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttoncontainer}>
        <Text>Bike</Text>
      </TouchableOpacity>
    </View>
  )
}

export default VehicleTypeScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  topText:{
    position:"absolute",
    top:"5%",
  },
  buttoncontainer:{
    width:"50%",
    height:"10%",
    justifyContent:'center',
    marginVertical:40,
    alignItems:"center",
    textAlign:"center",
    backgroundColor:'white',
  }
})