import { AsyncStorageKeys } from "../enums";
import AsyncStorage from "@react-native-async-storage/async-storage";

const saveValue = async (
  key: AsyncStorageKeys,
  value: string
): Promise<void> => {
  AsyncStorage.setItem(key, value);
};

const getValue = async (key: AsyncStorageKeys): Promise<string | null> => {
  return AsyncStorage.getItem(key);
};

const deleteValue = async (key: AsyncStorageKeys): Promise<void> => {
  AsyncStorage.removeItem(key);
};

export const asyncStorageHelper = {
  saveValue,
  getValue,
  deleteValue,
};
