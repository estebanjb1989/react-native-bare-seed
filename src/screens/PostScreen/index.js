
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function PostScreen() {
  const handlePost = () => {
    alert(1);
  };
  return (
    <View style={styles.container}>
      <Text>SATLANTIS</Text>
      <Button onPress={handlePost} title="POST"></Button>
    </View>
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
