import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{Component} from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons';
import CircleSlider from "react-native-circle-slider";
import { Svg, Rect, Circle } from 'react-native-svg';
import LinearGradient from 'react-native-linear-gradient'
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
      <View style={{ marginTop:45, justifyContent: "center", alignItems: "center" }}>
			<Text style={{position:'absolute',paddingBottom:'50%'}}>12:00</Text>
      <View style={{position:'absolute',paddingBottom:'5%'}}>
      <Text style={{width:'22%',marginTop:30,position:'absolute',paddingLeft:15}}>09:00</Text>
       <View style={{flexDirection:'row',justifyContent:'space-between',width:'50%',alignSelf:'center'}}>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>6:00</Text>
        <Text style={{fontSize:12}}>On Time</Text>
     </View>
      <View style={{ height: '100%',
 width: 1.5,
 backgroundColor: '#909090',}}/>
        <View style={{alignItems:'center'}}>
        <Text style={{fontSize:18,fontWeight:'bold',color:'black'}}>9:00</Text>
        <Text style={{fontSize:12}}>On Time</Text>
    
        </View>
        <Text style={{width:'35%',marginTop:30,marginLeft:136,position:'absolute'}}>03:00</Text>
       
       </View>
       

       <View style={{position:'absolute',alignItems:'center',alignSelf:'center',marginTop:45}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'black'}}>3:00</Text>
        <Text>Hours</Text>
        <Text style={{width:'85%',marginTop:75,position:'absolute'}}>06:00</Text>
        </View>
      </View>
      	<CircleSlider value={90} strokeColor={'grey'} textSize={15}  strokeWidth={30} meterColor={"#4D004B"} dialWidth={30} btnRadius={20}  textColor={'#FFF'} />
        
			</View>
     <View style={{width:'90%',alignSelf:'center',marginTop:40}}>
        <Text style={{fontSize:18,fontWeight:'bold',marginLeft:'10%'}}>Repeat</Text>
     <ScrollView horizontal style={{marginTop:10,height:'8%',alignSelf:'center'}}>
    
     <LinearGradient  colors={['#515151', '#4D004B']} style={{borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'15%',backgroundColor:'purple'}}>
      <Text style={{color:'white'}}>Today</Text>
      </LinearGradient>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'15%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Daily</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Sun</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Mon</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'100%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
     <View   style={{marginLeft:10,borderRadius:10,justifyContent:'center',alignItems:'center',height:'25%',width:'17%',backgroundColor:'#FFFF'}}>
      <Text style={{color:'black'}}>Today</Text>
      </View>
      
      </ScrollView>
      </View>
      <LinearGradient colors={['#515151', '#4D004B']} style={{width:'70%',height:'6%',backgroundColor:'purple',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:50,alignSelf:'center'}}>
        <Text style={{color:'white',fontSize:15}}>Save</Text>
      </LinearGradient>
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