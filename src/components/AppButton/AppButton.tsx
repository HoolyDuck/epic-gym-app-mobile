import { Colors } from "@/common/constants";
import { Text, Pressable, StyleSheet } from "react-native";
import { AppText } from "../AppText/AppText";

enum AppButtonVariants {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: AppButtonVariants;
};

const AppButton = (props: ButtonProps) => {
  const bgColor =
    props.variant === AppButtonVariants.SECONDARY
      ? Colors.WHITE
      : Colors.PRIMARY;

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
      <AppText
        weight="bold"
        style={styles.buttonText}
      >
        {props.children}
      </AppText>
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
    color: Colors.BLACK,
  },
});

export { AppButton, AppButtonVariants };
