import * as React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import screens
import Login from '../../Screens/Login/Index'
import SignUp from '../../Screens/SignUp/Index'
import WaterStatus from '../../Screens/WaterStatus/Index'
import MotorTimer from '../../Screens/MotorTimer/Index'

const Stack = createNativeStackNavigator();
const Index = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen  options={{headerShown: false, }} name="login" component={Login} />
      <Stack.Screen options={{headerShown: false, }} name="signUp" component={SignUp} />
      <Stack.Screen options={{headerShown: false, }} name="waterStatus" component={WaterStatus} />
      <Stack.Screen options={{headerShown: false, }} name="motroTimer" component={MotorTimer} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Index

const styles = StyleSheet.create({})