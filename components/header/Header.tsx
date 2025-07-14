import Colors from "@/constants/Colors";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Icon } from "react-native-paper";
import fonts from "@/components/CustomFonts";
const bellaIcon = require('@/assets/images/bella-icon-outlined.png');

interface HeaderProps {
  onBack: () => void;
  title: string;
  color: string;
  fontSize?: number;
  hiddenMenu?: boolean;
}

const Header = ({ onBack, title, color, fontSize = 24, hiddenMenu = false }: HeaderProps) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <Image source={bellaIcon} />
        { !hiddenMenu && <Icon source="menu" size={24} color={Colors.light.white} />}
      </View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, { color, fontSize }]}>{title}</Text>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Icon source="arrow-left" size={24} color={Colors.light.white} />
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 24,
    backgroundColor: Colors.light.primary,
    padding: 24,
    paddingTop: 56,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    height: 210,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 8,
  },

  title: {
    ...fonts.heavy,
    color: Colors.light.white,
    fontSize: 32,
    maxWidth: 200,
  },

  backButtonText: {
    ...fonts.semiBold,
    color: Colors.light.white,
    fontSize: 16,
  },
});