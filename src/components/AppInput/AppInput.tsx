import { Colors } from "@/utils/constants";
import {
  Control,
  Controller,
  ControllerProps,
  FieldValues,
} from "react-hook-form";
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  Text,
  View,
} from "react-native";
import { AppText } from "../AppText/AppText";

type Props<T extends FieldValues> = Partial<ControllerProps<T>>;

type InputProps = Props<any> &
  TextInputProps & {
    name: string;
    error?: string;
  };

const AppInput = (props: InputProps) => {
  const { control, rules, name, error, ...rest } = props;

  return (
    <Controller
      control={control}
      render={({ field: { onChange, value } }) => (
        <View style={styles.inputContainer}>
          <TextInput
            style={{
              ...styles.input,
              ...(error ? styles.inputError : {}),
            }}
            onChangeText={onChange}
            value={value}
            placeholderTextColor={Colors.TEXT_MUTE}
            {...rest}
          />
          {error && <AppText style={styles.errorText}>{error}</AppText>}
        </View>
      )}
      name={name}
      rules={rules}
    />
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 5,
    position: "relative",
  },

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
    borderWidth: 1,
    borderColor: Colors.BG_INPUT,
  },

  inputError: {
    borderColor: Colors.ERROR,
  },

  errorText: {
    position: "absolute",
    color: Colors.ERROR,
    fontSize: 12,
    paddingLeft: 20,
    bottom: -17,
  },
});

export { AppInput };
