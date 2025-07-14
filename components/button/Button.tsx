import Colors from "@/constants/Colors";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import fonts from "@/components/CustomFonts"

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'contained' | 'outlined';
  color?: typeof Colors.light.primary;
}

const Button = ({ title, onPress, variant = 'contained', color = Colors.light.primary }: ButtonProps) => {

  const {
    buttonContainer,
    buttonOutlinedContainer,
    button,
    buttonText,
  } = styles(color);

  const buttonStyle = variant === 'contained' ? buttonContainer : buttonOutlinedContainer;

  return (
    <TouchableOpacity style={[buttonStyle, button]} onPress={onPress}>
      <Text style={buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = (color: typeof Colors.light.primary) => StyleSheet.create({

  button: {
    height: 56,
    width: '100%',
    display: 'flex',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonContainer: {
    backgroundColor: color,
  },

  buttonOutlinedContainer: {
    borderWidth: 1,
    borderColor: Colors.light.white,
  },

  buttonText: {
    ...fonts.heavy,
    color: Colors.light.white,
    fontSize: 20,
    textAlign: 'center',
  },
});
