import Colors from "@/constants/Colors";
import { View, StyleSheet, TextInput } from "react-native";
import { Icon } from "react-native-paper";

interface TextInputProps {
  placeholder: string;
  onChangeText: (text: string) => void;
  value: string;
  icon: string;
  secureTextEntry?: boolean;
}

const BellaTextInput = ({ placeholder, onChangeText, value, secureTextEntry, icon }: TextInputProps) => {
  return (
    <View style={styles.input}>
      <Icon source={icon} size={24} />
      <TextInput
        style={styles.inputText}
        placeholder={placeholder}
        placeholderTextColor={Colors.light.text}
        onChangeText={onChangeText}
        value={value}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

export default BellaTextInput;


const styles = StyleSheet.create({
  input: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: Colors.light.white ,
    borderColor: Colors.light.white,
    color: Colors.light.text,
    borderRadius: 8,
    paddingLeft: 16,
    height: 56,
    width: '100%',
    fontSize: 16,
    borderWidth: 1,
  },

  inputText: {
    flex: 1,
    fontSize: 16,
  },
}); 