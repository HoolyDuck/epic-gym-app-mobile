import { store } from "@/lib/store/store";
import { Colors } from "@/utils/constants";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    <Provider store={store}>
      <View
        onLayout={onLayoutRootView}
        style={styles.container}
      >
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BG,
    justifyContent: "center",
    width: "100%",
  },
});
