import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import fonts from "../CustomFonts";

interface AppointmentButtonProps {
  onPress: () => void;
  showText?: boolean;
}

export default function AppointmentButton({ onPress, showText = true }: AppointmentButtonProps) {
  return (
    <View style={styles.container}>
      {showText && (
        <Text style={styles.title}>Que tal reservar um tempo para cuidar de você?</Text>
      )}
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Vou cuidar de mim</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...fonts.heavy,
    fontSize: 14,
    color: Colors.light.white,
    textAlign: 'center',
  },
  container: {
    width: "100%",
    height: 135,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
  button: {
    width: "90%",
    backgroundColor: Colors.light.white,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,

    // Sombra para Android
    elevation: 4,

    // Sombra para iOS
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8,

  },
  buttonText: {
    ...fonts.heavy,
    fontSize: 20,
    color: Colors.light.primary,
  },
});
