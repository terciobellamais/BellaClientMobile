import fonts from "@/components/CustomFonts";
import HeaderAppointments from "@/components/headerAppointments/HeaderAppointments";
import { ProceduresProps } from "@/components/proceduresList/Procedures";
import ProceduresList from "@/components/proceduresList/ProceduresList";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Appointments() {

  const [search, setSearch] = useState('');

  const procedures = [
    {
      id: 1,
      title: "Peeling",
      description: "Detalhes do procedimento, principais características e tipos de uso",
    },
    {
      id: 2,
      title: "Mamografia",
      description: "Detalhes do procedimento, principais características e tipos de uso",
    },
    {
      id: 3,
      title: "Criofrequência",
      description: "Detalhes do procedimento, principais características e tipos de uso",
    },
    {
      id: 4,
      title: "Criofrequência",
      description: "Detalhes do procedimento, principais características e tipos de uso",
    },
    {
      id: 5,
      title: "Criofrequência",
      description: "Detalhes do procedimento, principais características e tipos de uso",
    },

  ];

  const router = useRouter();

  const handlePress = () => {
    router.push(`/appointments/clinicsList`);
  }

  return (
    <View style={styles.container}>
      <HeaderAppointments search={search} setSearch={setSearch} />
      <View style={styles.content}>
        <Text style={styles.title}>Procedimentos mais procurados </Text>
        <ProceduresList procedures={procedures} onPress={handlePress} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 16,
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  link: {
    ...fonts.semiBold,
    fontSize: 16,
    color: Colors.light.primary,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    display: 'flex',
    backgroundColor: Colors.light.background,
    height: '100%',
    width: '100%',
    paddingTop: 28,
    gap: 20,
  },
  title: {
    ...fonts.regular,
    fontSize: 18,
    marginLeft: 60,
  },
});
