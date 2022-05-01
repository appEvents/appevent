
import { StyleSheet, Text, View, } from "react-native";
import { NavigationContainer } from '@react-navigation/native';

import { OpeningRoot } from "./src/Navigations/Opening/OpeningRoot";

export default function App() {
  return (
   
    <NavigationContainer>
          <OpeningRoot/>
    </NavigationContainer>
  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

