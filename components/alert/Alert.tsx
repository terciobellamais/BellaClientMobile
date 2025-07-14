import Colors from "@/constants/Colors";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "react-native-paper";

export default function Alert({ text }: { text: string }) {
  return (
    <View style={styles.container}>
      <Icon source="close-circle-outline" size={24} color={Colors.light.error} />
      <Text>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Colors.light.errorLight,
    padding: 10,
    borderRadius: 10,
    width: '100%',
    paddingVertical: 14,
  },
});