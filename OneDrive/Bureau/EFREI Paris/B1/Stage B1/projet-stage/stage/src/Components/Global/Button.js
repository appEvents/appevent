import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from '@react-navigation/native'

export function Button(props) {

    const navigation = useNavigation()

    const goTo = () =>{
        console.log("Button Start")
        navigation.navigate(props.screen)
      }
  return (
    <TouchableOpacity
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: props.widthButton,
        height: 50,
        backgroundColor: props.bgColor,
        borderRadius: 10,
      }}
      onPress={(goTo) }
    >
      <Text
        style={{
          color: props.textColor,
          fontWeight: props.fontWeight,
          fontSize:20
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});

