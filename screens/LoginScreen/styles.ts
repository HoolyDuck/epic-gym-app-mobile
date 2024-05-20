import { Colors } from "@/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: Colors.BG,
    alignItems: "center",
    justifyContent: "center",
    gap: 40,
    fontFamily: "Montserrat",
    fontSize: 16,
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
  },
  loginText: {
    color: Colors.WHITE,
    fontSize: 48,
    fontFamily: "MontserratBold",
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
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: 20,
  },
  orText: {
    color: Colors.TEXT_MUTE,
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: 20,
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
    fontFamily: "MontserratBold",
    fontSize: 16,
    lineHeight: 20,
  },
});

export { styles };
