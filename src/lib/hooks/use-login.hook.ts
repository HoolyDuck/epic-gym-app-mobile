import { useLoginMutation } from "@/lib/apis/auth.api";
import { asyncStorageHelper } from "@/common/helpers";
import { AsyncStorageKeys } from "@/common/enums";
import { router } from "expo-router";
import { LoginCredentials } from "@/common/types";

const useLogin = () => {
  const [login] = useLoginMutation();

  const handleLogin = async (credentials: LoginCredentials) => {
    const { data, error } = await login(credentials);
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
