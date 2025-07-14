import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Divider } from "react-native-paper";
import { Link } from "expo-router";

export type ClinicItemProps = {
  clinic: {
    id: number;
    name: string;
    address: string;
    value: number;
  };
  onPress: () => void;
}

const convertToCurrency = (value: number) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const ClinicItem = ({ clinic, onPress }: ClinicItemProps) => {

  const value = convertToCurrency(clinic.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{clinic.name}</Text>
      <Divider style={styles.divider} />
      <View style={styles.addressContainer}>
        <Text style={styles.address}>{clinic.address}</Text>
        <View style={styles.appointmentContainer}>
          <Text style={styles.value}>{value}</Text>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.appointmentText}>Ver agenda</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.white,
    borderRadius: 10,
    paddingVertical: 16,
    gap: 14,
  },

  address: {
    fontSize: 14,
    color: Colors.light.text,
  },

  addressContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    gap: 8,
  },

  divider: {
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
    paddingHorizontal: 16,
  },

  appointmentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  value: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light.textSecondary,
  },

  appointmentText: {
    fontSize: 14,
    color: Colors.light.primary,
    textDecorationLine: 'underline',
  },
});

export default ClinicItem;