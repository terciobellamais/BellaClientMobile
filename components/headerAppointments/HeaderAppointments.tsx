import Colors from "@/constants/Colors";
import { Image, ImageBackground, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import fonts from "../CustomFonts";
import { Dispatch, SetStateAction } from "react";
const backgroundHeader = require('@/assets/images/appointment.png');
const bellaIcon = require('@/assets/images/bella-icon-outlined.png');

interface HeaderAppointmentsProps {
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;
}

export default function HeaderAppointments({ search, setSearch }: HeaderAppointmentsProps) {
  return (
    <View>
      <ImageBackground
        source={backgroundHeader}
        style={styles.background}
        imageStyle={styles.image}
      >
        <View style={styles.iconContainer}>
          <Image source={bellaIcon} />
          <Icon source="menu" size={24} color="white" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Vou cuidar de mim</Text>
          <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
              {search.length > 0 && (
                <TouchableOpacity onPress={() => setSearch('')}>
                  <Icon source="close" size={24} color={Colors.light.text} />
                </TouchableOpacity>
              )}
              {search.length === 0 && (
                <Icon source="magnify" size={24} color={Colors.light.text} />
              )}
            </View>
            <TextInput
              onChangeText={setSearch}
              value={search}
              placeholder="Digite o nome do procedimento"
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    ...fonts.heavy,
    fontSize: 24,
    color: Colors.light.white,
    textShadowColor: 'rgba(0, 0, 0, 0.3)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  background: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 400,
  },
  image: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
    width: '100%',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    width: '80%',
    gap: 8,
  },
  searchIconContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    width: '100%',
  }
});