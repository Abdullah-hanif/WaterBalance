import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'

const Index = ({navigation}) => {
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
      <View style={{flexDirection:'row',justifyContent:'space-around',marginTop:10,height:'5%'}}>
        <LinearGradient  colors={['#515151', '#4D004B']} style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'90%',backgroundColor:'purple'}}>
      <Text style={{color:'white'}}>Today</Text>
      </LinearGradient>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'90%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Week</Text>
      </View>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'90%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Month</Text>
      </View>
        <View   style={{borderRadius:10,width:'20%',justifyContent:'center',alignItems:'center',height:'90%',backgroundColor:'white'}}>
      <Text style={{color:'black'}}>Year</Text>
      </View>
     
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around',paddingTop:'10%'}}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:'30%',borderRadius:360,width:'9%',backgroundColor:'purple'}}>
         
          </View>
          <View style={{paddingLeft:5}}>
          <Text style={{}}>Today's Water</Text>
          <Text>Consumption</Text>
          </View>
        </View>
        <View style={{flexDirection:'row',alignItems:'center'}}>
        <View style={{height:'30%',borderRadius:360,width:'9%',backgroundColor:'purple'}}>
         
          </View>
       <View style={{paddingLeft:5}}>
        <Text>Today's Energy</Text>
        <Text>Consumption</Text>
       </View>
        </View>
      </View>
      <View style={{marginTop:40,flexDirection:'row',justifyContent:'space-around'}}>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>75%</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Water</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Save</Text>
        </View>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:18,fontWeight:'bold'}}>20%</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Energy</Text>
          <Text style={{fontSize:18,fontWeight:'bold'}}>Save</Text>
        </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
      <View style={{
        
        justifyContent: 'center',
        marginTop:'20%'
          
      }}>
        <LinearGradient colors={['#d4f1f9','#74ccf4']} style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          borderTopLeftRadius: 125,
          borderTopRightRadius: 250,
          borderBottomLeftRadius: 250,
           
          transform: [{ rotateZ: '226deg' }]
        }}>

          <Text style={{ color: 'white', transform: [{ rotateZ: '134deg' }], fontWeight: 'bold', fontSize: 14 }}>
            9 0%
          </Text>
        </LinearGradient>
      </View>
      <View style={{
        
        justifyContent: 'center',
        marginTop:'20%'
          
      }}>
        <LinearGradient colors={['#4D004B','#515151']} style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: 100,
          height: 100,
          borderTopLeftRadius: 125,
          borderTopRightRadius: 250,
          borderBottomLeftRadius: 250,
           backgroundColor: '#4D004B',
          transform: [{ rotateZ: '226deg' }]
        }}>

          <Text style={{ color: 'white', transform: [{ rotateZ: '134deg' }], fontWeight: 'bold', fontSize: 14 }}>
            100%
          </Text>
        </LinearGradient>
      </View>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-around'}}>
        <TouchableOpacity onPress={()=>(navigation.navigate('motroTimer'))} style={{justifyContent:'center',alignSelf:'center'}}>
          <Image source={require('../../Assets/motor.png')} style={{width:'100%',height:'35%'}}/>
          <Text style={{fontWeight:'bold'}}>Upper Tank</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>(navigation.navigate('motroTimer'))} style={{justifyContent:'center',alignSelf:'center'}}>
          <Image source={require('../../Assets/motor.png')} style={{width:'100%',height:'35%'}}/>
          <Text style={{fontWeight:'bold'}}>Lower Tank</Text>
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