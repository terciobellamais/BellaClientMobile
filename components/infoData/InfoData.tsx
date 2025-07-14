import { StyleSheet, Text, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import fonts from "../CustomFonts";

interface InfoDataProps {
  title: string;
  description: string;
}

export default function InfoData({ title, description }: InfoDataProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    gap: 4,
    minWidth: 80,
    maxWidth: 240,
  },

  title: {
    ...fonts.regular,
    fontSize: 16,
    color: Colors.light.text,
  },

  description: {
    ...fonts.heavy,
    fontSize: 16,
    color: Colors.light.text,
  },
})
