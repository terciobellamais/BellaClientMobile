import Colors from "@/constants/Colors";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Header from "@/components/header/Header";
import ClinicItem, { ClinicItemProps } from "@/components/clinicItem/ClinicItem";
import { useRouter } from "expo-router";

const clinics = [
  { id: 1, name: "Clínica 1", address: "Rua 1, 123", value: 100 },
  { id: 2, name: "Clínica 2", address: "Rua 2, 456", value: 200 },
  { id: 3, name: "Clínica 3", address: "Rua 3, 789", value: 300 },
  { id: 4, name: "Clínica 4", address: "Rua 4, 101", value: 400 },
  { id: 5, name: "Clínica 5", address: "Rua 5, 123", value: 500 },
  { id: 6, name: "Clínica 6", address: "Rua 6, 123", value: 600 },
  { id: 7, name: "Clínica 7", address: "Rua 7, 123", value: 700 },
  { id: 8, name: "Clínica 8", address: "Rua 8, 123", value: 800 },
  { id: 9, name: "Clínica 9", address: "Rua 9, 123", value: 900 },
];

const ClinicsList = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const handleMakeAppointment = () => {
    router.push('/appointments/makeAppointment');
  }

  return (
    <View style={styles.container}>
      <Header onBack={handleBack} title="Preenchimento labial" color={Colors.light.text} />

      <View style={styles.clinicsList}>
        <Text style={styles.title}>Agora, escolha qual clínica você deseja fazer o procedimento</Text>

        <FlatList
          data={clinics}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ClinicItem clinic={item} onPress={handleMakeAppointment} />}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  list: {
    gap: 12,
  },

  clinicsList: {
    flex: 1,
    paddingTop: 12,
    paddingHorizontal: 24,
    gap: 16,
  },

  title: {
    fontSize: 14,
    color: Colors.light.text,
  },
});

export default ClinicsList;
