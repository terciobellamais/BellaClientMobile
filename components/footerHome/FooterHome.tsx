import Colors from "@/constants/Colors";
import { StyleSheet, Text, View } from "react-native";
import fonts from "../CustomFonts";
import StatisticsFooter from "../statiscsFooter/StatisticsFooter";

export default function FooterHome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mais facilidade para você</Text>
      <View style={styles.statisticsContainer}>
        <StatisticsFooter number={2000} text="clínicas cadastradas" />
        <StatisticsFooter number={300} text="Exames e procedimentos" />
        <StatisticsFooter number={500} text="Médicos credenciados" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    marginBottom: 24,
    gap: 12,
  },
  title: {
    ...fonts.heavy,
    fontSize: 16,
    color: Colors.light.secondary,
    textAlign: 'center',
  },
  statisticsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
  }
});
