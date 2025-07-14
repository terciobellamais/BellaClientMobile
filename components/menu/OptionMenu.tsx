import { StyleSheet, Text, TouchableOpacity } from "react-native";
import fonts from "../CustomFonts";

interface OptionMenuProps {
  icon: React.ReactNode;
  title: string;
  onPress: () => void;
  endIcon?: boolean
}

const OptionMenu = ({ icon, title, onPress, endIcon = false }: OptionMenuProps) => {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      { !endIcon && icon}
      <Text style={styles.title}>{title}</Text>
      {endIcon && icon}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 20,
  },

  title: {
    fontSize: 18,
    fontFamily: fonts.regular.fontFamily,
  },

  endIcon: {
    fontSize: 18,
    fontFamily: fonts.regular.fontFamily,
  },
});

export default OptionMenu;