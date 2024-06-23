import { Colors } from "@/common/constants";
import { StyleSheet, Text, TextProps } from "react-native";

type AppTextProps = TextProps & {
  children: React.ReactNode;
  weight?: "regular" | "bold";
};

const DEFAULT_FONT_SIZE = 16;
const DEFAULT_LINE_HEIGHT_MULTIPLIER = 1.5;

const AppText = ({
  weight = "regular",
  style,
  children,
  ...rest
}: AppTextProps) => {
  const fontFamily = weight === "bold" ? "MontserratBold" : "Montserrat";
  const lineHeight =
    StyleSheet.flatten(style)?.fontSize ||
    DEFAULT_FONT_SIZE * DEFAULT_LINE_HEIGHT_MULTIPLIER;
  const calculatedStyle = {
    ...styles.text,
    fontFamily,
    lineHeight,
  };

  return (
    <Text
      style={[calculatedStyle, style]}
      {...rest}
    >
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    color: Colors.WHITE,
    fontSize: DEFAULT_FONT_SIZE,
  },
});

export { AppText };
