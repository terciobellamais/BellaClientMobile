import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../CustomFonts";

export interface ProceduresProps {
  id: number;
  title: string;
  description: string;
}

export default function Procedures({ id, title, description }: ProceduresProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.divider}/>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  divider: {
    width: '100%',
    height: 0.4,
    backgroundColor: Colors.light.text,
  },
  container: {
    backgroundColor: Colors.light.white,
    borderRadius: 8,
    gap: 10,
    paddingVertical: 20,
  },
  title: {
    ...fonts.heavy,
    color: Colors.light.purple,
    fontSize: 24,
    marginLeft: 16,
  },
  description: {
    ...fonts.regular,
    color: Colors.light.text,
    fontSize: 18,
    marginLeft: 16,
  },
});