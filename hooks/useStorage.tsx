import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = (key: string) => {
  const setItem = async (value: string) => {
    await AsyncStorage.setItem(key, value);
  }

  const getItem = async () => {
    return await AsyncStorage.getItem(key);
  }

  const removeItem = async () => {
    await AsyncStorage.removeItem(key);
  }

  return { setItem, getItem, removeItem };
}

export default useStorage;  