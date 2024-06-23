import { SecureStoreKeys } from "../enums";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveValue = async (
  key: SecureStoreKeys,
  value: string
): Promise<void> => {
  AsyncStorage.setItem(key, value);
};

const getValue = async (key: SecureStoreKeys): Promise<string | null> => {
  return AsyncStorage.getItem(key);
};

const deleteValue = async (key: SecureStoreKeys): Promise<void> => {
  AsyncStorage.removeItem(key);
};

export const asyncStorageHelper = {
  saveValue,
  getValue,
  deleteValue,
};
