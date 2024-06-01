import { StyleSheet, Text, View } from "react-native";
import { Link, SplashScreen } from "expo-router";
import { Colors } from "@/constants";
import { useCallback } from "react";
import { useFonts } from "expo-font";

const Index = () => {
  const [loaded, error] = useFonts({
    Montserrat: require("@/assets/fonts/Montserrat.ttf"),
    MontserratBold: require("@/assets/fonts/MontserratBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (loaded || error) {
      await SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded) {
    return null;
  }

  return (
    <View
      style={styles.container}
      onLayout={onLayoutRootView}
    >
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
