import Colors from "@/constants/Colors";
import { fonts } from "@/components/CustomFonts";
import { Dispatch, SetStateAction } from "react";
import { View, Linking, StyleSheet } from "react-native";
import { Checkbox } from "react-native-paper";
import TermsText from "./TermsText";

interface TermsProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

const Terms = ({ checked, setChecked }: TermsProps) => {

  const checkedState = checked ? "checked" : "unchecked";

  const handleChecked = () => setChecked(!checked);
  const handleLinkPress = (url: string) => Linking.openURL(url);
  const handleTermsPress = () => handleLinkPress("https://example.com/terms");
  const handlePrivacyPress = () => handleLinkPress("https://example.com/privacy");

  return (
    <View style={styles.container}>

      <Checkbox
        status={checkedState}
        color={Colors.light.primary}
        uncheckedColor={Colors.light.error}
        onPress={handleChecked}
      />

      <TermsText
        color={Colors.light.white}
        handleTermsPress={handleTermsPress}
        handlePrivacyPress={handlePrivacyPress} />

    </View>
  );
};

const styles = StyleSheet.create({
  radioButton: {
    backgroundColor: Colors.light.primary,
  },

  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Terms;