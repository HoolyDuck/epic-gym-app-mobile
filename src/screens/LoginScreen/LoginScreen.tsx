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
import { router } from "expo-router";

type LoginFormData = {
  email: string;
  password: string;
};

export const LoginScreen = () => {
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

  const handleLogin = (data: LoginFormData) => {
    router.navigate("home");
  };

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
          rules={{ required: "Email is required" }}
          error={errors.email?.message}
        />
        <Input
          placeholder="Password"
          name="password"
          control={control}
          rules={{ required: "Password is required" }}
          error={errors.password?.message}
        />
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button onClick={handleSubmit(handleLogin)}>
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