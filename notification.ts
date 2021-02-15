import * as Notifications from "expo-notifications";
import { NotificationContentInput } from "expo-notifications";
import { Platform } from "react-native";

class NotificationService {
  static initialize() {
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
      });
    }
  }

  static schedule(content: NotificationContentInput, date: number) {
    return Notifications.scheduleNotificationAsync({ content, trigger: date });
  }
}

export default NotificationService;
