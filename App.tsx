import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { Button, StyleSheet, View } from "react-native";
import NotificationService from "./notification";

const handleNotificationSchedule = async () => {
  const t = new Date();
  t.setSeconds(t.getSeconds() + 10);

  NotificationService.schedule({ title: "Test" }, t.getTime());
};

export default function App() {
  useEffect(() => {
    NotificationService.initialize();
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Notification in 5 sec..." onPress={handleNotificationSchedule} />
      <StatusBar style="auto" />
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
