import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Flex =() => {
  return(
    <View style={[styles.container1, {
      //try setting flexDirection to "row".
      flexDirection: "column"
      //flexDirection: "row"
      }]}>
    <View style={{ flex: 80, backgroundColor: "red"}} />
    <View style={{ flex: 0, backgroundColor: "blue"}} />
   <View style={[styles.container2, {
      //try setting flexDirection to "row".
      //flexDirection: "column"
      flexDirection: "row"
      }]}></View>
    <View style={{flex: 80, backgroundColor: "darkorange" }} />
    <View style={{flex: 0, backgroundColor: "green" }} />
    </View>        
    );
    
  };

//
const styles = StyleSheet.create({
  container1: {
  flex: 1,
  padding: 25,
},
flex: 1,
container2: {
  flex: 1,
  padding: 5,
 //alignItems: 'center',
 // justifyContent: 'center',
},
flex: 2,
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
