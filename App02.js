import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const Flex =() => {
//  const Flex = () => {
  return(
    <View style={[styles.container, {
      //try setting flexDirection to "row".
      flexDirection: "column"
      }]}>
    <View style={{ flex: 1, backgroundColor: "red" }} />
    <View style={{flex: 2, backgroundColor: "darkorange" }} />
    <View style={{flex: 3, backgroundColor: "green" }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 20,
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
