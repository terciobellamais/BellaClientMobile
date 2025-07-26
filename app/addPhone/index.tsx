import Alert from "@/components/alert/Alert";
import Button from "@/components/button/Button";
import fonts from "@/components/CustomFonts";
import Header from "@/components/header/Header";
import CodeInput from "@/components/textInputBella/CodeInput";
import PhoneInput, { Country, countries } from "@/components/textInputBella/PhoneInput";
import Colors from "@/constants/Colors";
import useAddPhone from "@/hooks/useAddPhone";
import { router } from "expo-router";
import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function AddPhone() {
  const [phone, setPhone] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries.find(country => country.code === 'BR')!);
  const [code, setCode] = useState<string>('');
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [error, setError] = useState(false);

  const { handleSendCode, handleVerifyCode } = useAddPhone();

  const fullPhone = selectedCountry.dialCode + phone;

  const handleBack = () => {
    router.back();
  };

  const handleSetPhone = (phone: string) => {
    setPhone(phone);
    setShowCodeInput(false);
  };

  const handleSetCode = useCallback(async (code: string) => {
    setCode(code);
    setError(false);
  }, [phone]);

  const sendCode = async () => {
    if (!phone.trim()) return;

    const response = await handleSendCode(fullPhone);
    if (!response.success) return;
    setShowCodeInput(true);
  };

  const verifyCode = async () => {
    console.log(code, !code.trim());
    if (!code.trim()) return;

    const response = await handleVerifyCode(fullPhone, code);

    setError(!response.success);

    if (!response.success) return;
    router.push('/home');
  };

  const handleContinue = async () => {
    if (showCodeInput) {
      await verifyCode();
      return;
    }

    await sendCode();
  };

  return (
    <View style={styles.container}>
      <Header
        onBack={handleBack}
        title="Criar uma conta"
        color={Colors.light.white}
        fontSize={28}
        hiddenMenu
      />
      <View style={styles.content}>
        <Text style={styles.title}>Cadastro do telefone</Text>
        <Text style={styles.subtitle}>
          Para nos asseguramos da sua identidade é necessário nos informar seu telefone.
          Em seguida vamos enviar um número por SMS que você deverá confirmá-lo
        </Text>

        <View style={styles.inputContainer}>
          <PhoneInput
            label="Telefone"
            phone={phone}
            setPhone={handleSetPhone}
            selectedCountry={selectedCountry}
            setSelectedCountry={setSelectedCountry}
          />
        </View>

        {showCodeInput && (
          <View style={styles.sendCodeContainer}>
            <Text style={styles.titleCode}>
              Confirme o código recebido abaixo
            </Text>

            <CodeInput setCodeField={handleSetCode} error={error} />

            <View style={styles.codeContainer}>

              <Text style={styles.subtitleCodeInstruction}>
                Não recebeu o código?
              </Text>

              <Text style={styles.subtitleCode} onPress={sendCode}>
                Reenviar código
              </Text>
            </View>
            {error && <Alert text="Esse código não é válido" />}
          </View>
        )}

        <View style={styles.buttonContainer}>
          <Button
            title="Continuar"
            onPress={handleContinue}
            variant="contained"
            color={Colors.light.primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },

  sendCodeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
    marginTop: 10,
  },

  subtitleCodeInstruction: {
    ...fonts.regular,
    fontSize: 16,
    marginBottom: 12,
    color: Colors.light.text,
  },

  subtitleCode: {
    ...fonts.regular,
    fontSize: 16,
    marginBottom: 12,
    textDecorationLine: 'underline',
    color: Colors.light.primary,
    cursor: 'pointer',
  },

  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  titleCode: {
    ...fonts.bold,
    fontSize: 20,
    color: Colors.light.text,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    gap: 20,
  },
  title: {
    ...fonts.bold,
    fontSize: 24,
    color: Colors.light.text,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: Colors.light.text,
    lineHeight: 24,
    marginBottom: 12,
  },
  inputContainer: {
    marginTop: 20,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
  },
});