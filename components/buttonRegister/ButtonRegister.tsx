import Colors from "@/constants/Colors";
import fonts from "@/components/CustomFonts";
import { TouchableOpacity, StyleSheet, ImageSourcePropType, Image } from "react-native";
import { Icon, Text } from "react-native-paper";

interface ButtonRegisterProps {
  image?: ImageSourcePropType;
  icon?: string;
  title: string;
  onPress: () => void;
}

const ButtonRegister = ({ title, onPress, icon, image }: ButtonRegisterProps) => {

  const { button, text } = styles;

  return (
    <TouchableOpacity style={[button]} onPress={onPress}>
      {image && <Image source={image} />}
      {icon && <Icon source={icon} size={24} />}
      <Text style={text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonRegister;

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    height: 56,
    borderRadius: 8,
    backgroundColor: Colors.light.white,
    padding: 16,
    width: '100%',
  },

  text: {
    ...fonts.heavy,
    fontSize: 20,
    color: Colors.light.text,
  },
});