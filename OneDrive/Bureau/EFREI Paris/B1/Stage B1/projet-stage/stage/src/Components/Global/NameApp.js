import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from "tailwind-react-native-classnames";

export  function NameApp() {
  return (
    <View style={tw`flex flex-row justify-center content-center `}>
      <Text style={styles.sport}>SPORT</Text>
      <Text style={styles.events}>EVENTS</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    viewNameApp:{
        display:'flex',
        alignItems:"center",
    },
    sport:{
        fontSize:40,
        color:"white"
        
    },
    events:{
        fontSize:40,
        fontWeight:"bold",
        color:"#99FF00"
    }
})