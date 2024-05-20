import { Button, ButtonVariants, Input } from "@/components";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { useForm } from "react-hook-form";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
  const { control, handleSubmit } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.logoContainer}>
        <View style={styles.logo}></View>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.form}>
        <Input
          placeholder="Email"
          name="email"
          control={control}
        />
        <Input
          placeholder="Password"
          name="password"
          control={control}
        />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onClick={handleSubmit((data) => console.log(data))}>
          Login
        </Button>
        <Text style={styles.orText}>or</Text>
        <Button
          onClick={() => console.log("Google button clicked")}
          variant={ButtonVariants.SECONDARY}
        >
          Continue with Google
        </Button>
      </View>
      <View style={styles.noAccountContainer}>
        <Text style={styles.orText}>Don't have an account?</Text>
        <Text style={styles.signupText}>Sign up</Text>
      </View>
    </KeyboardAvoidingView>
  );
};
