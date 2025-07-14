import Colors from "@/constants/Colors";
import { TouchableOpacity, StyleSheet, ImageSourcePropType } from "react-native";
import { Image } from "react-native";

interface ButtonLoginProps {
  onPress: () => void;
  icon: ImageSourcePropType;
}

const ButtonLogin = ({icon, onPress}: ButtonLoginProps) => {
  return (
    <TouchableOpacity style={styles.icon} onPress={onPress}>
      <Image source={icon} />
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const styles = StyleSheet.create({
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.light.white,
    borderRadius: 100,
    padding: 8,
    width: 40,
    height: 40,
  },
});