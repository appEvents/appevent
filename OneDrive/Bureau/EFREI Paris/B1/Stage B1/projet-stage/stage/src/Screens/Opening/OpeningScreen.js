import { StyleSheet, Text, View, ImageBackground } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { NameApp } from "../../Components/Global/NameApp";
import { Button } from "../../Components/Global/Button";

export function OpeningScreen({navigation} ) {
  return (
    <ImageBackground
      source={require("../../../assets//Images/Opening/Background.jpeg")}
      style={tw`flex flex-col w-full h-full`}
    >
      <View style={styles.View1}>
        <NameApp />
      </View>

      <View style={styles.View2}>
        <Text style={styles.text}>Find sport partners</Text>
        <Text style={styles.text}>around you !</Text>
      </View>

      <View style={styles.viewButtonConSub}>
        <Button text="Connection" textColor="#FFF" bgColor="rgba(255, 255, 255, 0.5)" fontWeight="bold" widthButton="45%" navigation={navigation} screen="ConnectionScreen"/>
        <Button text="Subscription" textColor="#FFF" bgColor="rgba(255, 255, 255, 0.5)" fontWeight="bold" widthButton="45%" navigation={navigation} screen="SubscriptionScreen"/>
      </View>

      <View style={styles.viewButtonFWA}>
        <Button text="Follow without account &#x2794;" textColor="#FFF" bgColor="rgba(0, 0, 0, 0.5)" fontWeight="bold" widthButton="95%" navigation={navigation} screen="HomeRoot"/>
        
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  View1: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    height: 170,
    backgroundColor: "#333333",
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  View2: {
    display: "flex",
    width: "100%",
    height: 450,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: 37,
    fontWeight: "bold",
    color: "white",
  },
  viewButtonConSub:{
    display: "flex",
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-around",
    width:"100%",
    height:"10%",
  },
  viewButtonFWA:{
    display: "flex",
    flexDirection:"row",
    justifyContent:"space-around",
    width:"100%",
    height:"10%",
  }
});
