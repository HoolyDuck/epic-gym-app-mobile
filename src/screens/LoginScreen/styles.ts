import { Colors } from "@/common/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.BG,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 100,
    backgroundColor: Colors.PRIMARY,
  },
  logoContainer: {
    alignItems: "center",
    display: "flex",
    gap: 10,
  },
  loginText: {
    fontSize: 48,
  },
  form: {
    display: "flex",
    gap: 20,
    width: "100%",
    paddingHorizontal: 20,
  },
  forgotPassword: {
    color: Colors.TEXT_MUTE,
    textAlign: "right",
  },
  orText: {
    color: Colors.TEXT_MUTE,
    textAlign: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    gap: 10,
    paddingHorizontal: 20,
  },

  noAccountContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },

  signupText: {
    color: Colors.PRIMARY,
  },

  errorText: {
    color: "red",
    paddingHorizontal: 20,
  },
});

export { styles };
