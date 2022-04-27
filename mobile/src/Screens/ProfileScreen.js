import { StyleSheet, View,TouchableOpacity,Image} from 'react-native'
import React,{useState} from 'react'

import { AntDesign } from '@expo/vector-icons';
import { Avatar, Modal,Portal,Text } from 'react-native-paper';
import AnimatedLottieView from 'lottie-react-native';


import AuthButton from '../Components/AuthButton'

const LogoutModal=()=>{
  return(
    <Portal.Host>
      <Text>Content of the app</Text>
    </Portal.Host>
  )
}


const ProfileScreen = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backbutton}>
        <AntDesign name="arrowleft" size={40}
        style={{color:"gray"}} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.sidebar}>
        <AntDesign name="appstore-o" size={30}
        style={{color:"gray"}} />
      </TouchableOpacity>

      <View style={styles.profilecontainer}>
        <View style={styles.imagecontainer}>
          <Avatar.Image
            size={100}
            rounded
            source={require(`../../assets/defaultAvatar.png`)} />
        </View>
        <View style={styles.textcontainer}>
          <Text style={styles.name}>John Doe</Text>
          <Text style={styles.email}>johndoe@gmail.com</Text>
          <Text style={styles.email}>+91 9026971112</Text>
          <TouchableOpacity
            style={{backgroundColor:'#FF8C32',
                    marginTop:5,
                    paddingVertical:10,
                    paddingHorizontal:10,
                    borderRadius:10,
                    width:'50%',
                    minWidth:'50%'
                  }}
            onPress={setModalVisible(true)}
            >
            <Text
            style={{fontSize:15,color:'white',textAlign:'center'}}
            >Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.metadata}>
        <View style={styles.metaset}>
          <AntDesign name='amazon' size={30} style={{color:'#FF8C32',}}/>
          <Text>Data</Text>
        </View>
        <View style={styles.metaset}>
          <AntDesign name='amazon' size={30} style={{color:'#FF8C32',}}/>
          <Text>Data</Text>
        </View>
        <View style={styles.metaset}>
          <AntDesign name='amazon' size={30} style={{color:'#FF8C32',}}/>
          <Text>Data</Text>
        </View>
      </View>

      <View style={styles.garage}>
        <Text style={styles.garageHeading}>🚗 Garage</Text>

        <View style={styles.cars}>
          <Image
            style={styles.carsicon}
            source={require('../../assets/CarIcon.png')}
          />
          <Image
            style={styles.carsicon}
            source={require('../../assets/CarIcon.png')}
          />
          <AntDesign name="plus" style={styles.pluslogo}/>
        </View>

      </View>
      <View style={styles.bottombuttongrp}>
        <TouchableOpacity style={styles.bottombutton}>
          <Text style={{fontSize:15}}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottombutton}>
          <Text style={{fontSize:15}}>Click Me</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottombutton}>
        <Text style={{fontSize:15}}>Click Me</Text>
          </TouchableOpacity>
        <TouchableOpacity style={styles.bottombutton}>
          <Text style={{fontSize:15}}>Click Me</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  backbutton:{
    position:'absolute',
    top:50,
    left:10,
  },
  sidebar:{
    position:'absolute',
    top:52.5,
    right:25,
  },
  profilecontainer:{
    position:'relative',
    //top:'-25%',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    width:'90%',
    height:'20%',
    backgroundColor:'#EDE6DB',
    paddingVertical:10,
    paddingHorizontal:30,
    marginHorizontal:30,
    borderRadius:40,
  },
  imagecontainer:{
    padding:5,
    backgroundColor:'#FF8C32',
    borderRadius:50,
    marginRight:30,
  },
  textcontainer:{
    padding:5,
    textAlign:'left',
    alignContent:'center'
  },
  name:{
    fontSize:20,
    fontWeight:'600',
    color:'#FF8C32',
    marginBottom:5,
  },
  email:{
    fontSize:15,
    fontWeight:'400',
    color:'black',
    marginBottom:5,
  },
  metadata:{
    marginTop:20,
    flexDirection:'row',
  },
  metaset:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginHorizontal:20,
  },
  garage:{
    position:'relative',
    marginTop:10,
  },
  garageHeading:{
    marginTop:20,
    fontSize:30,
    textAlign:'left',
    fontStyle:'italic',
    fontWeight:'500',
  },
  cars:{
    marginTop:20,
    flexDirection:'row',
    alignContent:'flex-start',
    justifyContent:'center',
    backgroundColor:'white',
    borderRadius:20,
    width:'75%',
    alignItems:'flex-start'
  },
  carsicon:{
    margin:10,
    padding:2,
    height:50,
    width:50,
    borderColor:'red'
  },
  pluslogo:{
    margin:10,
    padding:2,
    height:50,
    width:50,
    fontSize:50,
    color:'gray',
  },
  bottombuttongrp:{
    marginTop:10,
    width:'50%',
    alignItems:'center',
    alignSelf:'center',
    borderRadius:5,
    backgroundColor:'white',
    padding:-5,
    borderColor:'black',
    shadowColor:'red',
    marginBottom:20,
  },
  bottombutton:{
    borderRadius:10,
    textAlign:'center',
    marginVertical:4,
    paddingHorizontal:60,
    paddingVertical:10,
    backgroundColor:'white',
    borderColor:'black',
    borderWidth:2,
    fontSize:15,
  }
})