import Colors from "@/constants/Colors";
import { View, TextInput, StyleSheet, Animated } from "react-native";
import { useState, useEffect, useRef, Dispatch, SetStateAction, useMemo } from "react";

interface TextInputBellaProps {
  label: string;
  value: string;
  setValue: (value: string) => void;
  type?: "text" | "password";
}

const maskValue = (value: string) => {
  return value.replace(/./g, '*');
}

const TextInputBella = ({ label, value, setValue, type = "text" }: TextInputBellaProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(0)).current;
  const maskedValue = useMemo(() => type === "password" ? maskValue(value) : value, [value, type]);
  const inputRef = useRef<TextInput>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
    setIsFocused(true);
  }

  useEffect(() => {
    Animated.timing(animatedIsFocused, {
      toValue: isFocused || value ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [isFocused, value]);

  const labelStyle = {
    position: 'absolute' as const,
    zIndex: 1,
    left: 10,
    backgroundColor: Colors.light.white,
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [34, 10],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [16, 12],
    }),
    color: Colors.light.text,
  };

  return (
    <View style={{ paddingTop: 18 }}>
      <Animated.Text style={labelStyle} onPress={handleFocus}>
        {label}
      </Animated.Text>
      <TextInput
        ref={inputRef}
        autoCapitalize="none"
        value={maskedValue}
        onChangeText={setValue}
        style={styles.input}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=""
        placeholderTextColor={Colors.light.text}
      />
    </View>
  );
};

export default TextInputBella;

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    height: 52,
    fontSize: 16,
    borderWidth: 0.4,
  },
});
