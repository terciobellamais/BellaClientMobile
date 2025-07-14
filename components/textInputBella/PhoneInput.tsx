import Colors from "@/constants/Colors";
import emojiFlags from 'emoji-flags';
import { AsYouType, CountryCode } from 'libphonenumber-js';
import { useRef, useState } from "react";
import worldCountries from 'world-countries';

import {
  Animated,
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";


export interface Country {
  code: string;
  name: string;
  flag: string;
  dialCode: string;
}

interface PhoneInputProps {
  label: string;
  phone: string;
  setPhone: (phone: string) => void;
  selectedCountry: Country;
  setSelectedCountry: (country: Country) => void;
}

// Utility function to get clean phone number (digits only)
export const getCleanPhoneNumber = (formattedPhone: string): string => {
  return formattedPhone.replace(/\D/g, '');
};

export const countries: Country[] = worldCountries
  .filter((country) => country.idd?.root && country.idd?.suffixes)
  .map((country) => {
    const { cca2, translations, name, idd } = country;
    const dialCode = idd.root + idd.suffixes[0];
    const flag = emojiFlags[cca2]?.emoji ?? '🏳️';

    return {
      code: cca2,
      name: translations.por?.common || name.common,
      flag,
      dialCode,
    };
  });

const PhoneInput = ({ label, phone, setPhone, selectedCountry, setSelectedCountry }: PhoneInputProps) => {
  const [showCountryModal, setShowCountryModal] = useState(false);
  const inputRef = useRef<TextInput>(null);

  const handleChangeText = (text: string) => {
    const numbers = text.replace(/\D/g, '');

    if (numbers.length > 15) return;

    if (numbers.length <= phone.length) {
      setPhone(phone.slice(0, -1));
      return;
    }
    
    setPhone(numbers);
  };



  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);

    // If there's an existing phone number, reformat it with the new country
    if (phone) {
      const numbers = getCleanPhoneNumber(phone);
      const asYouType = new AsYouType(country.code as CountryCode);
      const formattedNumber = asYouType.input(numbers);
      setPhone(formattedNumber);
    }

    setShowCountryModal(false);
  };

  const labelStyle = {
    position: 'absolute' as const,
    zIndex: 1,
    left: 16,
    paddingHorizontal: 4,
    top: 12,
    fontSize: 12,
    color: Colors.light.text,
  };

  const renderCountryItem = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleCountrySelect(item)}
    >
      <Text style={styles.countryFlag}>{item.flag}</Text>
      <View style={styles.countryInfo}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryCode}>{item.dialCode}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ paddingTop: 18 }}>
      <Animated.Text style={labelStyle}>
        {label}
      </Animated.Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={styles.countrySelector}
          onPress={() => setShowCountryModal(true)}
        >
          <Text style={styles.selectedFlag}>{selectedCountry.flag}</Text>
          <Text style={styles.selectedDialCode}>{selectedCountry.dialCode}</Text>
          <Text style={styles.dropdownArrow}>▼</Text>
        </TouchableOpacity>

        <TextInput
          ref={inputRef}
          value={new AsYouType(selectedCountry.code as CountryCode).input(phone)}
          onChangeText={(text) => handleChangeText(text)}
          style={styles.input}
          placeholder="Digite seu telefone"
          placeholderTextColor={Colors.light.textSecondary}
          keyboardType="phone-pad"
        />
      </View>

      <Modal
        visible={showCountryModal}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setShowCountryModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Selecionar País</Text>
              <TouchableOpacity
                onPress={() => setShowCountryModal(false)}
                style={styles.closeButton}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <FlatList
              data={countries}
              renderItem={renderCountryItem}
              keyExtractor={(item) => item.code}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PhoneInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countrySelector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.light.white,
    borderColor: Colors.light.text,
    paddingHorizontal: 12,
    paddingVertical: 16,
    minWidth: 80,
  },
  selectedFlag: {
    fontSize: 16,
    marginRight: 4,
  },
  selectedDialCode: {
    fontSize: 14,
    color: Colors.light.text,
    marginRight: 4,
  },
  dropdownArrow: {
    fontSize: 10,
    color: Colors.light.textSecondary,
  },
  input: {
    flex: 1,
    backgroundColor: Colors.light.white,
    padding: 16,
    paddingLeft: 0,
    height: 52,
    fontSize: 16,
    borderColor: Colors.light.text,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: Colors.light.white,
    borderRadius: 12,
    padding: 20,
    width: '90%',
    maxHeight: '70%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.background,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.light.text,
  },
  closeButton: {
    padding: 8,
  },
  closeButtonText: {
    fontSize: 18,
    color: Colors.light.textSecondary,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.light.background,
  },
  countryFlag: {
    fontSize: 20,
    marginRight: 15,
  },
  countryInfo: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    color: Colors.light.text,
    marginBottom: 2,
  },
  countryCode: {
    fontSize: 14,
    color: Colors.light.textSecondary,
  },
});
