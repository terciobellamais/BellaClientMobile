import Button from "@/components/button/Button";
import CircularCountdown from "@/components/CircularCountdown";
import fonts from "@/components/CustomFonts";
import HomeHeader from "@/components/homeHeader/HomeHeader";
import InfoData from "@/components/infoData/InfoData";
import Colors from "@/constants/Colors";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-paper";

const bellaHome = require('@/assets/images/checkin.png');

const getRandomToken = () => {
  return Math.floor(100000 + Math.random() * 900000);
}

export default function CheckIn() {

  const [token, setToken] = useState(getRandomToken());

  return (
    <View style={styles.container}>
      <HomeHeader title="Chegou o dia!" backgroundImage={bellaHome} onPress={() => { }} />
      <View style={styles.content}>
        <Text style={styles.title}>Outfit Golden Clinic</Text>
        <View style={styles.containerForInfo}>
          <View style={styles.infoContainer}>
            <InfoData title="Médico" description="Dra. Sandra Salles de Almeida" />
            <InfoData title="CRM" description="12345678" />
          </View>
          <View style={styles.infoContainer}>
            <InfoData title="Procedimento" description="Preenchimento labial" />
            <InfoData title="Valor" description="R$ 230,00" />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerForInfo}>
          <View style={styles.infoContainer}>
            <InfoData title="Endereço" description="Av. Paulista, 4567, conjunto 23 Bela Vista, São Paulo - SP" />
            <Text style={styles.link}>
              Ver no mapa
            </Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.containerDate}>
          <View style={styles.iconContainer}>
            <Icon source="calendar-outline" size={24} color={Colors.light.primary} />
            <Text>Hoje, 17/10/2024</Text>
          </View>
          <View style={styles.iconContainer}>
            <Icon source="clock-outline" size={24} color={Colors.light.primary} />
            <Text>12:00h</Text>
          </View>
        </View>
      </View>

      <View style={styles.containerToken}>
        <Text style={styles.labelToken}>
          Token de confirmação
        </Text>
        <View style={styles.containerCountdown}>
          <CircularCountdown revalidate={() => { setToken(getRandomToken()) }} />
          <Text style={styles.token}>
            {token}
          </Text>
        </View>

      </View>

      <View style={styles.containerButton}>
        <Button title="Gerar token de confirmação" onPress={() => { }} />
        <View style={styles.reAppointments}>
          <Text style={styles.labelReAppointments}>Teve algum imprevisto?</Text>
          <Text style={styles.linkReAppointments}>Reagendar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  containerCountdown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },

  containerToken: {
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    paddingBottom: 32,
  },

  labelToken: {
    ...fonts.heavy,
    fontSize: 16,
    color: Colors.light.text,
  },

  token: {
    ...fonts.heavy,
    fontSize: 32,
    color: Colors.light.text,
    textAlign: 'center',
    minWidth: 112,
  },

  labelReAppointments: {
    ...fonts.medium,
    fontSize: 16,
    color: Colors.light.text,
  },

  linkReAppointments: {
    ...fonts.medium,
    fontSize: 16,
    color: Colors.light.primary,
    textDecorationLine: 'underline',
    paddingBottom: 4,
  },

  reAppointments: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 16,
    gap: 8,
  },
  containerButton: {
    paddingHorizontal: 16,
    gap: 24,
    paddingBottom: 24,
  },
  containerDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 8,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 4,
    color: Colors.light.text,
    alignItems: 'center',
  },

  divider: {
    width: '100%',
    height: 0.4,
    backgroundColor: Colors.light.text,
    marginVertical: 16,
  },

  containerForInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '100%',
    gap: 16,
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  title: {
    ...fonts.heavy,
    fontSize: 32,
    color: Colors.light.text,
    marginTop: 20,
  },
  content: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 40,
    gap: 16,
  },
  link: {
    ...fonts.medium,
    fontSize: 16,
    color: Colors.light.purple,
    textDecorationLine: 'underline',
    paddingBottom: 4,
  }
});
