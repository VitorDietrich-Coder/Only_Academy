import React, { useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Loading() {
  const navigation = useNavigation();

  useEffect(() => {
      navigation.navigate(false ? "AppTab" : "AuthStack");
  }, []);

  return (
    <View style={styles.container}>
      <Text>Só um momento ...</Text>
      <ActivityIndicator size="large" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
