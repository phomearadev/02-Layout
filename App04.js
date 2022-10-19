import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Flex =() => {
  return(
    <View style={[styles.container1, {
      flexDirection: "column"
      }]}>
    <View style={{ flex: 1, backgroundColor: "purple"}} />
    <View style={{ flex: 1, backgroundColor: "blue"}} />
    <View style={{flex: 1, backgroundColor: "darkorange" }} />
    </View>        
    );
    
  };

//
const styles = StyleSheet.create({
  container1: {
  flex: 1,
  padding: 5,
},
});

export default Flex




// older code
//export default function App() {
//  return (
//    <View style={styles.container}>
//      <Text>Open up App.js to start working on your app!</Text>
//      <StatusBar style="auto" />
//    </View>
//  );
//}

//const styles = StyleSheet.create({
//  container: {
//    flex: 1,
//    backgroundColor: '#fff',
//    alignItems: 'center',
//    justifyContent: 'center',
//  },
//});
