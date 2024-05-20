import { Colors } from "@/constants";
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
} from "react-hook-form";
import { StyleSheet, TextInput, TextInputProps } from "react-native";

type Props<T extends FieldValues> = Partial<ControllerProps<T>>;

type InputProps = Props<any> &
  TextInputProps & {
    name: string;
  };

const Input = (props: InputProps) => {
  const { control, rules, name, ...rest } = props;

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextInput
          style={styles.input}
          onChangeText={onChange}
          value={value}
          placeholderTextColor={Colors.TEXT_MUTE}
          {...rest}
        />
      )}
      name={name}
      rules={rules}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 100,
    width: "100%",
    backgroundColor: Colors.BG_INPUT,
    color: Colors.WHITE,
    fontFamily: "Montserrat",
    fontSize: 16,
    lineHeight: 20,
  },
});

export { Input };
