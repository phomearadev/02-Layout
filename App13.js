import React, { useState, Component } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const AlignSelfLayout = () => {
  const [alignSelf, setAlignSelf] = useState("stretch");

  return (
    <PreviewLayout
      label="alignSelf"
      selectedValue={alignSelf}
      values={["stretch", "flex-start", "flex-end", "center", "baseline"]}
      setSelectedValue={setAlignSelf}>
        <View
          style={[styles.box, {
            alignSelf,
            width: "auto",
            minWidth: 50,
            backgroundColor: "powderblue",
          }]}
        />
      <View
        style={[styles.box, { backgroundColor: "skyblue" }]}
      />
      <View
      //  style={[styles.box, { backgroundColor: "steelblue" }]}
      style={[styles.box, {
        alignSelf,
        width: "auto",
        minWidth: 50,
        backgroundColor: "powderblue",
      }]}
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
    <View style={styles.container}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
    minHeight: 200,
  },
  box: {
    width: 50,
    height: 50,
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
    marginTop: 30,
    fontSize: 24,
  },
});

export default AlignSelfLayout;