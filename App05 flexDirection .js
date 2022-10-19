import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const FlexDirectionBasics = () => {
const {FlexDirection, setflexDirection} = useState ("column");

return (
  <PreviewLayout
    label="flexDirection"
    values= {["column", "row", "row-reverse", "column-reverse"]}
    selectedValue={flexDirection}
    setSelectedValue={setflexDirection}
  >
  <view
  style={[styles.box, { backgroundColor: "powederblue" }]}
  />
  <view
  style={[styles.box, { backgroundColor: "skyblue" }]}
  />
  <view
  style={[styles.box, { backgroundColor: "steelblue" }]}
  />
  </PreviewLayout>
);
};


