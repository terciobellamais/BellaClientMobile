import AppointmentsList from "@/components/appointmentsList/AppointmentsList";
import fonts from "@/components/CustomFonts";
import FooterHome from "@/components/footerHome/FooterHome";
import HomeHeader from "@/components/homeHeader/HomeHeader";
import Colors from "@/constants/Colors";
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text } from "react-native";
// import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';
import AppointmentButton from "@/components/appointmentsList/AppointmentButton";
import Menu from "@/components/menu/Menu";
import useMenu from "@/hooks/useMenu";
import { useRouter } from "expo-router";
import React, { useMemo } from "react";

const bellaHome = require('@/assets/images/home.png');

const appointments = [
  {
    id: '1',
    title: 'Corte de cabelo',
    date: '2024-01-01',
    time: '10:00',
    enabledCheckIn: true,
  },
  {
    id: '2',
    title: 'Corte de cabelo',
    date: '2024-01-01',
    time: '10:00',
    enabledCheckIn: false,
  },
  {
    id: '3',
    title: 'Corte de cabelo',
    date: '2024-01-01',
    time: '10:00',
    enabledCheckIn: false,
  }
]

export default function Home() {
  const router = useRouter();
  const { toggleMenu } = useMenu();

  const appointmentsWithCheckIn = appointments.filter(appointment => appointment.enabledCheckIn);
  const hasAppointments = appointments.length > 0;

  const message = useMemo(() => {
    if (appointmentsWithCheckIn.length > 0)
      return `Você tem ${String(appointmentsWithCheckIn.length).padStart(2, '0')} agendamento hoje!`;

    if (appointments.length > 0)
      return `Você tem ${String(appointments.length).padStart(2, '0')} procedimento agendado`;

    return "Que tal reservar um tempo para cuidar de você?";
  }, [appointmentsWithCheckIn, appointments]);

  return (
    <Menu>
      <LinearGradient
        colors={[Colors.light.primaryGradient, Colors.light.primary]}
        style={styles.container}
      >
        <HomeHeader backgroundImage={bellaHome} onPress={toggleMenu} />

        <Text style={styles.title}>{message}</Text>

        <AppointmentsList appointments={appointments} />

        <AppointmentButton onPress={() => router.push('/appointments')} showText={hasAppointments} />

        <FooterHome />
      </LinearGradient>
    </Menu>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    ...fonts.heavy,
    fontSize: 24,
    color: Colors.light.white,
    textAlign: 'center',
    marginTop: 20,
    paddingHorizontal: 60,
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
