import { Colors } from "@/utils/constants";
import { Text, View, StyleSheet } from "react-native";

export default function Workouts() {
  return <View style={styles.container}>
    <Text>Workouts</Text>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG,
    alignItems: "center",
    justifyContent: "center",
  },
});
