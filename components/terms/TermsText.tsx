import Colors from "@/constants/Colors";
import { Text, View, StyleSheet } from "react-native";
import fonts from "../CustomFonts";

interface TermsTextProps {
  handleTermsPress: () => void;
  handlePrivacyPress: () => void;
  color: typeof Colors.light.text;
}

const TermsText = ({ handleTermsPress, handlePrivacyPress, color }: TermsTextProps) => {
  const {
    terms,
    termsContainer,
    link, 
  } = styles(color);

  return (
    <View style={termsContainer}>
      <Text style={terms}>
        Concordo com os{" "}
        <Text style={link} onPress={handleTermsPress}>
          Termos e Condições
        </Text>{" "}
        do Bella+ e aceito a{" "}
        <Text style={link} onPress={handlePrivacyPress}>
          Política de Privacidade
        </Text>
      </Text>
    </View>
  );
};

export default TermsText;

const styles = (color: typeof Colors.light.text) => StyleSheet.create({
  terms: {
    ...fonts.regular,
    fontSize: 14,
    color: color,
  },

  termsContainer: {
    display: 'flex',
    flex: 1,
    gap: 8,
  },
  
  link: {
    color: Colors.light.primary,
    textDecorationLine: 'underline',
  },
})