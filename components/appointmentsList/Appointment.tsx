import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";
import fonts from "../CustomFonts";
import { AppointmentProps } from "./AppointmentsList";

const formatDate = (date: string) => {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

export default function Appointment(props: AppointmentProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon source="calendar-outline" size={24} color={Colors.light.primary} />
          <Text>{formatDate(props.date)}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Icon source="clock-outline" size={24} color={Colors.light.primary} />
          <Text>{props.time}h</Text>
        </View>
      </View>
      {!props.enabledCheckIn && (
        <View style={styles.arrowContainer}>
          <Icon source="arrow-right" size={24} color={Colors.light.primary} />
        </View>
      )}
      {props.enabledCheckIn && (
        <View style={styles.buttonCheckIn}>
          <View style={styles.buttonCheckInContent}>
            <Icon source="arrow-right" size={24} color={Colors.light.white} />
          </View>
          <Text style={styles.buttonCheckInText}>confirmar</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonCheckInText: {
    ...fonts.medium,
    fontSize: 14,
    color: Colors.light.purple,
  },
  buttonCheckInContent: {
    display: 'flex',
    backgroundColor: Colors.light.purple,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    height: 38,
    width: 38,
  },
  buttonCheckIn: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    position: 'absolute',
    right: 18,
    bottom: 24,
  },
  arrowContainer: {
    position: 'absolute',
    right: 18,
    bottom: 14,
  },
  container: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    margin: 10,
    width: 224,
    gap: 28,
    paddingVertical: 20,
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 4,
    color: Colors.light.text,
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 8
  },
  title: {
    ...fonts.heavy,
    fontSize: 14,
    color: Colors.light.text,
  },
});
