import Button from "@/components/button/Button";
import Calendar from "@/components/calendar/Calendar";
import Header from "@/components/header/Header";
import Colors from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Divider } from "react-native-paper";

const hours = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
]

const MakeAppointment = () => {
  const router = useRouter();

  const [selectedHour, setSelectedHour] = useState<string | null>(null);

  const handleBack = () => {
    router.back();
  }

  const handleOpenMap = () => {
    // Aqui vai a lógica para abrir o mapa
    console.log('Abrindo mapa...');
  }

  return (
    <View style={styles.content}>
      <Header
        onBack={handleBack}
        title="Outfit Golden Clinic"
        color={Colors.light.text}
        fontSize={32}
      />

      <View style={styles.container}>
        <View style={styles.procedureInfoContainer}>
          <View style={styles.procedureContainer}>
            <View style={styles.procedureInfo}>
              <Text style={styles.label}>Procedimento</Text>
              <Text style={styles.description}>Preenchimento labial</Text>
            </View>
            <View style={styles.procedureInfo}>
              <Text style={styles.label}>Valor</Text>
              <Text style={styles.description}>R$ 230,00</Text>
            </View>
          </View>
          <Divider style={styles.divider} />
        </View>

        <View style={styles.procedureContainer}>
          <View style={styles.procedureInfo}>
            <Text style={styles.label}>Endereço</Text>
            <Text style={styles.description}>
              Av. Paulista, 4567, conjunto 23 Bela Vista, São Paulo - SP
            </Text>
          </View>
          <Pressable onPress={handleOpenMap}>
            <Text style={styles.link}>Ver no mapa</Text>
          </Pressable>
        </View>

        <View style={styles.procedureContainer}>
          <View style={styles.procedureInfo}>
            <Text style={styles.label}>Médico</Text>
            <Text style={styles.description}>Dra. Sandra Salles de Almeida</Text>
            <Text style={styles.label}>CRM 12345678</Text>
          </View>
          <Pressable onPress={handleOpenMap}>
            <Text style={styles.link}>Alterar</Text>
          </Pressable>
        </View>

        <View style={styles.timeContainer}>
          <Text style={styles.timeLabel}>Agora é só escolher a data e horário</Text>
          <Calendar />
        </View>

        <View style={styles.timeList}>
          {hours.map((hour) => {
            const isSelected = selectedHour === hour;
            return (
              <Pressable key={hour} style={[styles.timeButton, isSelected && styles.timeButtonSelected]} onPress={() => setSelectedHour(hour)}>
                <Text style={[styles.timeText, isSelected && styles.timeTextSelected]}>{hour}</Text>
              </Pressable>
            )
          })}
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Agendar" onPress={() => {}} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  divider: {
    paddingVertical: 1,
  },

  content: {
    flex: 1,
    gap: 24,
    backgroundColor: Colors.light.background,
  },

  buttonContainer: {
    paddingHorizontal: 16,
    paddingBottom: 48,
  },

  container: {
    gap: 28,
    paddingHorizontal: 16,
    flex: 1,
  },

  procedureContainer: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  procedureInfoContainer: {
    gap: 16,
  },

  procedureInfo: {
    gap: 8,
    flexShrink: 1,
  },

  label: {
    fontSize: 14,
    color: Colors.light.text,
  },

  description: {
    fontSize: 14,
    fontWeight: 'bold',
    color: Colors.light.text,
  },

  link: {
    fontSize: 14,
    color: Colors.light.primary,
    textDecorationLine: 'underline',
  },

  timeContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 54,
    gap: 16,
  },

  timeLabel: {
    fontSize: 18,
    paddingHorizontal: 8,
    color: Colors.light.primary,
    fontWeight: 'bold',
  },

  timeButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
    backgroundColor: Colors.light.primary,
  },

  timeTextSelected: {
    color: Colors.light.white,
  },

  timeButtonSelected: {
    backgroundColor: Colors.light.purple,
  },

  timeText: {
    fontSize: 14,
    color: Colors.light.text,
    fontWeight: 'semibold',
  },

  timeList: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    flexWrap: 'wrap',
    gap: 12,
  },
});

export default MakeAppointment;
