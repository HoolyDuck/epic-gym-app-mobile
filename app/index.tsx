import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import { Colors } from "@/constants";
import { Button, ButtonVariants, Input } from "@/components";
import { useFonts } from "expo-font";

const Index = () => {
  const [fontsLoaded] = useFonts({
    Montserrat: require("@/assets/fonts/Montserrat-Regular.ttf"),
    MontserratBold: require("@/assets/fonts/Montserrat-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <Link href="/login">Login</Link>
      <Button onClick={() => console.log("Button clicked")}>Login</Button>
      <Button
        onClick={() => console.log("Button clicked")}
        variant={ButtonVariants.SECONDARY}
      >
        Login
      </Button>
      <Input
        placeholder="Username"
        value=""
        onChange={(text) => console.log(text)}
      />
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
