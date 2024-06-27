import { StyleSheet, Text, View } from "react-native";
import { Link, SplashScreen } from "expo-router";
import { Colors } from "@/common/constants";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text>WellCum</Text>
      <Link href="/login">Login</Link>
      <Link href="/home">Home</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Index;
