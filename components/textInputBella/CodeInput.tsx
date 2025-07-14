import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { View, TextInput, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import Colors from '@/constants/Colors';

interface CodeInputProps {
  setCodeField: (code: string) => void;
  error: boolean;
}

export default function CodeInput({ setCodeField, error = false}: CodeInputProps) {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    setCodeField(code.join(''));
  }, [code, setCodeField]);

  const handleChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      if (code[index] === '' && index > 0) {
        const newCode = [...code];
        newCode[index - 1] = '';
        setCode(newCode);
        inputs.current[index - 1]?.focus();
      }
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => {
            if (ref) {
              inputs.current[index] = ref;
            }
          }}

          style={[styles.input, error && styles.error]}
          keyboardType="numeric"
          maxLength={1}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={(e) => handleKeyPress(e, index)}
          textAlign="center"
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fef3f2',
  },
  input: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#999',
    backgroundColor: '#fff',
    fontSize: 24,
  },
  error: {
    borderColor: Colors.light.error,
  },
});
