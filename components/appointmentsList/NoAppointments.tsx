import Colors from "@/constants/Colors";
import { BlurView } from "expo-blur";
import { StyleSheet, Text } from "react-native";
import { Icon } from "react-native-paper";
import fonts from "../CustomFonts";

export default function NoAppointments() {
  return (
    <BlurView intensity={50} style={styles.blurView}>
      <Icon source="plus-circle-outline" size={24} color="white" />
      <Text style={styles.title}>Você ainda não tem nenhuma marcação</Text>
    </BlurView>
  );
}

const styles = StyleSheet.create({
  title: {
    ...fonts.heavy,
    fontSize: 14,
    color: Colors.light.white,
    textAlign: 'center',
  },
  blurView: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    borderRadius: 8,
    overflow: 'hidden',
    gap: 8,
    paddingVertical: 48,
  },
});
