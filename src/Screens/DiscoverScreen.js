import { StyleSheet, Text, View } from "react-native";
import React from "react";

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text>DiscoverScreen</Text>
    </View>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
