import React, { useState, Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const MyContentLayout = () => {
  //const [alignContent, setAlignContent] = useState("flex-start");
  const [alignContent, setAlignContent] = useState("center");

  return (
    <PreviewLayout
      label="My alignContent!"
      selectedValue={alignContent}
      values={[
      //  "flex-start",
      //  "flex-end",
      //  "stretch",
      //  "center",
      //  "space-between",
      //  "space-around",
      ]}
      setSelectedValue={setAlignContent}>
      <View
      //  style={[styles.box, { backgroundColor: "orangered" }]}
      />
      <View
      //  style={[styles.box, { backgroundColor: "orange" }]}
      />
      <View
      //  style={[styles.box, { backgroundColor: "mediumseagreen" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "deepskyblue" }]}
      />
      <View
      //  style={[styles.box, { backgroundColor: "mediumturquoise" }]}
      />
      <View
        style={[styles.box, { backgroundColor: "mediumslateblue" }]}
      />
      <View
      //  style={[styles.box, { backgroundColor: "purple" }]}
      />
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value &&
                styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View
      style={[
        styles.container,
        { [label]: selectedValue },
      ]}
    >
    </View>
    <View
      style={[
        styles.container2,
        { [label]: selectedValue },
      ]}
    >
     
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: "wrap",
    //marginTop: 8,
    //backgroundColor: "aliceblue",
    //backgroundColor: "red",
    backgroundColor: "magenta",
    maxHeight: 240,
  },
  container2: {
    flex: 1,
    flexWrap: "wrap",
    //marginTop: 8,
    //backgroundColor: "blue",
    backgroundColor: "aliceblue",
    maxHeight: 300,
  },
  box: {
    width: 185,
    height: 450,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 1,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignItems: 'center',
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    marginTop: 40,
    fontSize: 24,
  },
});

export default MyContentLayout;