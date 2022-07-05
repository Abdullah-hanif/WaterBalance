import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';

const Index = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection:'row',alignItems:'center',marginTop:30,paddingLeft:20}}>
     <TouchableOpacity onPress={()=>(navigation.goBack())}>
        <Ionicons name='arrow-back-outline' size={30}/>
        </TouchableOpacity>
        <Text style={{paddingLeft:10,fontWeight:'600',fontSize:20,}}>Garden Lights Timer</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',marginTop:20}}>
        <Text style={{fontSize:18,fontWeight:'600'}}>4 CFL, 8LED 2 Focus Lamps</Text>
       <TouchableOpacity>
        <Text style={{color:'purple',fontSize:18,fontWeight:'600'}}> Edit</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Index

const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor:'#e0e0e0'
    }
})