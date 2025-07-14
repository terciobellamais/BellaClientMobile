import Colors from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import fonts from "../CustomFonts";

interface StatisticsFooterProps {
  number: number;
  text: string;
}

export default function StatisticsFooter({ number, text }: StatisticsFooterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.number}>+{number}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  number: {
    ...fonts.heavy,
    fontSize: 24,
    color: Colors.light.secondary,
    textAlign: 'center',
  },
  text: {
    ...fonts.regular,
    fontSize: 16,
    color: Colors.light.secondary,
    textAlign: 'center',
  },
});
