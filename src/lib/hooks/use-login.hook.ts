import { useLoginMutation } from "@/lib/apis/auth.api";
import { asyncStorageHelper } from "@/common/helpers";
import { AsyncStorageKeys } from "@/common/enums";
import { router } from "expo-router";

type LoginFormData = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [login] = useLoginMutation();

  const handleLogin = async (credentials: LoginFormData) => {
    const { data, error } = await login({
      username: credentials.email,
      password: credentials.password,
    });

    if (error) {
      console.log("Error logging in", error);
      return;
    }

    if (data) {
      console.log("Logged in successfully", data);
      asyncStorageHelper.saveValue(
        AsyncStorageKeys.ACCESS_TOKEN,
        data.accessToken
      );
      router.navigate("/home");
    }
  };

  return { handleLogin };
};

export { useLogin };
