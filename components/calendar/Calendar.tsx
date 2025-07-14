import Colors from '@/constants/Colors';
import { useCallback, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { DefaultTheme, Icon, Provider as PaperProvider } from 'react-native-paper';
import { DatePickerModal, registerTranslation } from 'react-native-paper-dates';
import { CalendarDate } from 'react-native-paper-dates/lib/typescript/Date/Calendar';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6B46C1', // Roxo
    background: '#FBB6CE', // Rosa claro
    surface: '#FBB6CE',
    onSurface: '#333',
    text: '#333',
  },
};


registerTranslation('pt-BR', {
  save: 'Salvar',
  selectSingle: 'Selecione uma data',
  selectMultiple: 'Selecione datas',
  selectRange: 'Selecione um intervalo',
  notAccordingToDateFormat: inputFormat => `O formato deve ser ${inputFormat}`,
  mustBeHigherThan: date => `Deve ser após ${date}`,
  mustBeLowerThan: date => `Deve ser antes de ${date}`,
  mustBeBetween: (startDate, endDate) => `Deve estar entre ${startDate} - ${endDate}`,
  dateIsDisabled: 'Esta data não está permitida',
  previous: 'Anterior',
  next: 'Próximo',
  typeInDate: 'Digite a data',
  pickDateFromCalendar: 'Escolha a data no calendário',
  close: 'Fechar',
  hour: 'Hora',
  minute: 'Minuto',
});

const formatDate = (date: CalendarDate) => {
  if (!date) return '';
  const formattedDate = date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    weekday: 'long',
  });

  return formattedDate[0].toUpperCase() + formattedDate.slice(1);
};

export default function Calendar() {
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState<CalendarDate>(new Date());

  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(({ date }: { date: CalendarDate }) => {
    setVisible(false);
    setDate(date);
  }, [setVisible, setDate]);

  return (
    <PaperProvider theme={theme}>
      <View style={styles.content}>

        <Pressable style={styles.container} onPress={() => setVisible(true)}>
          <Text>{formatDate(date)}</Text>
          <Icon source="calendar-edit" size={24} color={Colors.light.primary} />
        </Pressable>


        <DatePickerModal
          locale="pt-BR"
          mode="single"
          visible={visible}
          onDismiss={onDismiss}
          date={date}
          onConfirm={onConfirm}
          saveLabel="Salvar"
          animationType="slide"
        />
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Colors.light.white,
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%',
    gap: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  content: {
    height: 56,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
});