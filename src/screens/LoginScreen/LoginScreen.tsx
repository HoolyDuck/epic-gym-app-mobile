import { AppButton, AppButtonVariants, AppInput, AppText } from "@/components";
import { View, Text, KeyboardAvoidingView } from "react-native";
import { styles } from "./styles";
import { useForm } from "react-hook-form";
import { useLogin } from "@/lib/hooks";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { handleLogin } = useLogin();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
        <AppText style={styles.loginText} weight="bold">Login</AppText>
      </View>
      <View style={styles.form}>
        <AppInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          error={errors.email?.message}
        />
        <AppInput
          placeholder="Password"
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          error={errors.password?.message}
        />
        <AppText style={styles.forgotPassword}>Forgot password?</AppText>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton onClick={handleSubmit(handleLogin)}>Login</AppButton>
        <AppText style={styles.orText}>or</AppText>
        <AppButton
          onClick={() => console.log("Google button clicked")}
          variant={AppButtonVariants.SECONDARY}
        >
          Continue with Google
        </AppButton>
      </View>
      <View style={styles.noAccountContainer}>
        <AppText style={styles.orText}>Don't have an account?</AppText>
        <AppText style={styles.signupText}>Sign up</AppText>
      </View>
    </KeyboardAvoidingView>
  );
};
