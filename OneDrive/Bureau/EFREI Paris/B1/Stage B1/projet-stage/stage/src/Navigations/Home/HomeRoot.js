import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from "react-native-elements";
import {tw} from "tailwind-react-native-classnames"
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from "../../Screens/Home/HomeScreen";
import { MapScreen } from "../../Screens/Map/MapScreen";
import { MessagesScreen } from "../../Screens/Messages/MessagesScreen";
import { FriendsScreen } from "../../Screens/Friends/FriendsScreen";
import { ProfileScreen } from "../../Screens/Profile/ProfileScreen";

export function HomeRoot() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      // tabBarOptions={{
      //   showLabel:false
      // }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            iconName = focused
              ? "home"
              : "home";
          // } else if (route.name === "MapScreen") {
          //   iconName = focused ? "pin" : "pin";
          } else if (route.name === "MessagesScreen") {
            iconName = focused ? "chatbubbles" : "chatbubbles";
          } else if (route.name === "FriendsScreen") {
            iconName = focused ? "people" : "people";
          } else if (route.name === "ProfileScreen") {
            iconName = focused ? "person" : "person";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={40} color={color} />;
        },
        tabBarActiveTintColor: "#99FF00",
        tabBarInactiveTintColor: "gray",
        tabBarShowLabel:false,
        tabBarStyle:{
          backgroundColor:"#333333",
          height:110,
          borderTopLeftRadius:40,
          borderTopRightRadius:40,
          
        }
      })}
    >
      <Tab.Screen name="HomeScreen" component={HomeScreen}  />
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} />
      <Tab.Screen name="MapScreen" component={MapScreen} options={{
        tabBarIcon:({focused}) => (
          <View style={styles.View}>
            <Ionicons name="location-sharp" color={focused ? "#99FF00" : "#333333"} size={50} style={{
              display:"flex",
              justifyContent:'center',
              textAlign:"center",
              width:60,
              height:60,
              paddingTop:5,
              backgroundColor:"gray",
              borderRadius:50,

            }}/>
          </View>
        ) 
      }}/>
      <Tab.Screen name="FriendsScreen" component={FriendsScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  View:{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"#333333",
      width:80,
      height:80,
      borderRadius:50,
      top:-40

  }
});
