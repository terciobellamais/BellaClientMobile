import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import Procedures, { ProceduresProps } from "./Procedures";

interface ProceduresListProps {
  procedures: ProceduresProps[];
  onPress: () => void;
}

export default function ProceduresList({ procedures, onPress }: ProceduresListProps) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {procedures.map((procedure) => (
          <TouchableOpacity key={procedure.id} onPress={onPress}>
            <Procedures key={procedure.id} {...procedure} />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    paddingHorizontal: 28,
    paddingBottom: 20,
  },
});
