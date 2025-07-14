import { ScrollView, StyleSheet, Text, View } from "react-native";
import AppointmentButton from "../appointmentsList/AppointmentButton";
import NoAppointments from "../appointmentsList/NoAppointments";
import Appointment from "./Appointment";

export type AppointmentProps = {
  id: string;
  title: string;
  date: string;
  time: string;
  enabledCheckIn: boolean;
}

interface AppointmentsListProps {
  appointments: AppointmentProps[];
}


export default function AppointmentsList({ appointments }: AppointmentsListProps) {

  const hasAppointments = appointments.length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {hasAppointments ? (
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {appointments.map((appointment) => (
              <Appointment key={appointment.id} {...appointment} />
            ))}
          </ScrollView>
        ) : (
          <NoAppointments />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
  },
  content: {
    width: "100%",
    display: 'flex',
    flexDirection: 'row',
  },
});
