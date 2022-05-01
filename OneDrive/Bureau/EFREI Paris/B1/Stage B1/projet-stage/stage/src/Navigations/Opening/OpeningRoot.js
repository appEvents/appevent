import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { OpeningScreen } from '../../Screens/Opening/OpeningScreen';
import {ConnectionScreen} from "../../Screens/Connection/ConnectionScreen"
import {SubscriptionScreen} from "../../Screens/Subscription/SubscriptionScreen"
import {HomeRoot} from "../../Navigations/Home/HomeRoot"


export  function OpeningRoot() {
    const Stack = createStackNavigator();

  return (
    
     <Stack.Navigator>
      <Stack.Screen 
          name="OpeningScreen"
          component={OpeningScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen 
          name="SubscriptionScreen"
          component={SubscriptionScreen}
          
        />
        <Stack.Screen 
          name="ConnectionScreen"
          component={ConnectionScreen}
        />
          <Stack.Screen 
          name="HomeRoot"
          component={HomeRoot}
        />
    
     </Stack.Navigator>
 
  )
}

const styles = StyleSheet.create({})