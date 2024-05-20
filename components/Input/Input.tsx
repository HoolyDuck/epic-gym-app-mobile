import { Colors } from "@/constants";
import { StyleSheet, TextInput } from "react-native";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

const Input = (props: InputProps) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={props.placeholder}
      placeholderTextColor={Colors.TEXT_MUTE}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 100,
    width: "100%",
    backgroundColor: Colors.BG_INPUT,
    color: Colors.WHITE,
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: 20,
    borderWidth: 1,
    borderColor: Colors.BG_INPUT,
  },
});

export { Input };
