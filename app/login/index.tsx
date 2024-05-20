import { Button } from "@/components";
import { View, Text } from "react-native";

export default function LoginScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onClick={() => console.log("Button clicked")}>Login</Button>
    </View>
  );
}
