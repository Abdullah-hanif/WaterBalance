import { StyleSheet, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Index = ({navigation}) => {
  return (
    <LinearGradient colors={['#515151', '#4D004B']} style={styles.mainContainer}>
      <View style={{marginTop:50,height:'25%',justifyContent:'center',alignItems:'center'}}>
        <Image source={require('../../Assets/comfortLogo.png')} style={{width:'30%',height:'65%'}}/>
      <Text style={{color:'grey',fontSize:12,marginTop:5}}>Live a Life Of Rilay</Text>
      </View>
      <View style={{alignItems:'center',marginTop:10}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingLeft:15,width:'75%',borderRadius:10}}>
           <FontAwesome name='user-circle-o' size={20}/>
            <TextInput placeholder='UserName' style={{backgroundColor:'white',borderRadius:10,width:'95%',paddingLeft:15}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center' ,backgroundColor:'white',width:'75%',marginTop:20,borderRadius:10}}>
        <Fontisto name='locked' size={20} style={{paddingLeft:10}}/>
        <TextInput placeholder='Password' secureTextEntry style={{width:'75%',backgroundColor:'white',paddingLeft:15}}/>
        <Ionicons name='eye-off' size={25} style={{paddingRight:10}}/>
        </View>
        <TouchableOpacity style={{backgroundColor:'grey',width:'70%',height:'16%',borderRadius:25,alignItems:'center',justifyContent:'center',marginTop:20}}>
            <Text style={{color:'white',fontSize:17}}>Sign In</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',marginTop:10}}>
            <TouchableOpacity>
            <Text style={{color:'white'}}>Forgetten Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=>(navigation.navigate('signUp'))}>
            <Text style={{color:'grey'}}>Create new account</Text>
            <Text style={{color:'white',fontSize:15,paddingLeft:10}}>SignUp</Text>
            </TouchableOpacity>
        </View>
      </View>
      </LinearGradient>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer:{
        backgroundColor:'#800060',
        flex:1
    }
})