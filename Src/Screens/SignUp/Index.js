import { StyleSheet,ScrollView, Text, View,Image,TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Index = ({navigation}) => {
  return (
    <LinearGradient colors={['#515151', '#4D004B']} style={styles.mainContainer}>
        <Text style={{color:'white',fontSize:40,alignSelf:'center',paddingTop:20,fontWeight:'bold'}}>Welcome</Text>
      <View style={{height:'25%',justifyContent:'center',alignItems:'center'}}>
      
        <Image source={require('../../Assets/comfortLogo.png')} style={{width:'30%',height:'65%'}}/>
      <Text style={{color:'grey',fontSize:12,marginTop:5}}>Live a Life Of Rilay</Text>
      </View>
      <View style={{marginTop:10,height:'100%'}}>
        <View style={{alignItems:'center'}}>
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingLeft:15,width:'75%',borderRadius:10}}>
           <FontAwesome name='user-circle-o' size={20}/>
            <TextInput placeholder='Full Name' style={{backgroundColor:'white',borderRadius:10,width:'95%',paddingLeft:15}}/>
        </View>
        <View style={{marginTop:20,flexDirection:'row',justifyContent:'center',alignItems:'center',backgroundColor:'white',paddingLeft:15,width:'75%',borderRadius:10}}>
           <FontAwesome name='user-circle-o' size={20}/>
            <TextInput placeholder='UserName' style={{backgroundColor:'white',borderRadius:10,width:'95%',paddingLeft:15}}/>
        </View>
        <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center' ,backgroundColor:'white',width:'75%',marginTop:20,borderRadius:10}}>
        <Fontisto name='locked' size={20} style={{paddingLeft:10}}/>
        <TextInput placeholder='Password' secureTextEntry style={{width:'75%',backgroundColor:'white',paddingLeft:15}}/>
        <Ionicons name='eye-off' size={25} style={{paddingRight:10}}/>
        </View>
        <View style={{borderBottomWidth:2,width:'75%',flexDirection:'row',alignItems:'center',paddingLeft:10,borderColor:'white',marginTop:10}}>
           <FontAwesome name='mobile-phone' size={25} color={'white'}/>
            <TextInput placeholder='Device ID' placeholderTextColor={'white'} style={{color:'white',paddingLeft:20,fontSize:15,width:'75%'}}/>
        </View> 
        <View style={{borderBottomWidth:2,width:'75%',flexDirection:'row',alignItems:'center',paddingLeft:10,borderColor:'white',marginTop:10}}>
           <MaterialCommunityIcons name='contacts' size={20} color={'white'}/>
            <TextInput placeholder='Contact Number' keyboardType='number-pad' placeholderTextColor={'white'} style={{color:'white',paddingLeft:20,fontSize:15,width:'75%'}}/>
        </View> 
        <View style={{borderBottomWidth:2,width:'75%',flexDirection:'row',alignItems:'center',paddingLeft:10,borderColor:'white',marginTop:10}}>
           <FontAwesome name='home' size={20} color={'white'}/>
            <TextInput placeholder='Adress' placeholderTextColor={'white'} style={{color:'white',paddingLeft:20,fontSize:15,width:'75%'}}/>
        </View> 
        <TouchableOpacity style={{backgroundColor:'grey',width:'70%',height:'10%',borderRadius:25,alignItems:'center',justifyContent:'center',marginTop:20}} onPress={()=>(navigation.navigate('waterStatus'))}>
            <Text style={{color:'white',fontSize:17}}>Sign Up</Text>
        </TouchableOpacity>
        <View style={{alignItems:'center',marginTop:10}}>
            <TouchableOpacity style={{flexDirection:'row',marginTop:10}} onPress={()=>(navigation.navigate('login'))}>
            <Text style={{color:'grey'}}>Have an account?</Text>
            <Text style={{color:'white',fontSize:15,paddingLeft:10}}>SignIn</Text>
            </TouchableOpacity>
        </View>
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