import { Colors } from "@/constants";
import {
  Text,
  Pressable,
  StyleSheet,
} from "react-native";

enum ButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: ButtonVariants;
};

const Button = (props: ButtonProps) => {
  const bgColor =
    props.variant === ButtonVariants.SECONDARY ? Colors.WHITE : Colors.PRIMARY;

  const btnStyles = {
    ...styles.button,
    backgroundColor: bgColor,
    borderColor: bgColor,
  };

  return (
    <Pressable
      style={btnStyles}
      onPress={props.onClick}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 100,
    width: "100%",
    alignItems: "center",
    borderWidth: 1,
  },

  buttonText: {
    fontFamily: "MontserratBold",
    fontSize: 16,
    lineHeight: 20,
  },
});

export { Button, ButtonVariants };
