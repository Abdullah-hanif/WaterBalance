import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
const Index = () => {
  return (
    <View style={styles.mainContainer}>
    <View style={{paddingTop:25,flexDirection:'row',justifyContent:'space-around'}}>
      <View>
      <Text style={{fontSize:25,color:'black',fontWeight:'700'}}>Water Status</Text>
      <Text style={{color:'purple',fontSize:15}}>Zain Bawa</Text>
      </View>
      <View>
      <Text style={{fontSize:25,color:'black',fontWeight:'700'}}>3:30pm</Text>
      <Text style={{color:'purple',fontSize:12}}>Internet Speed</Text>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10}}>
        <LinearGradient  colors={['#515151', '#4D004B']} style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'28%',backgroundColor:'purple'}}>
      <Text style={{color:'white'}}>Today</Text>
      </LinearGradient>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'28%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Week</Text>
      </View>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'28%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Month</Text>
      </View>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'28%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Year</Text>
      </View>
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