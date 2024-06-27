import { store } from "@/lib/store/store";
import { Colors } from "@/common/constants";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useCallback } from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { useProfileQuery } from "@/lib/apis/auth.api";
import { useAppDispatch } from "@/lib/store/hooks";
import { setUser } from "@/lib/store/slices/user.slice";

SplashScreen.preventAutoHideAsync();

function AppWrapper() {
  const [loaded, error] = useFonts({
    Montserrat: require("@/assets/fonts/Montserrat.ttf"),
    MontserratBold: require("@/assets/fonts/MontserratBold.ttf"),
  });

  const dispatch = useAppDispatch();

  const {
    data: profileData,
    error: profileError,
    isLoading: profileLoading,
  } = useProfileQuery();

  const onLayoutRootView = useCallback(async () => {
    if ((loaded || error) && !profileLoading) {
      await SplashScreen.hideAsync();
      if (profileError) {
        console.log("Error fetching profile", profileError);
        return;
      }
      dispatch(setUser(profileData));
    }
  }, [loaded, error, profileLoading]);

  if (!loaded) {
    return null;
  }

  return (
    <>
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
    </>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <AppWrapper />
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
