import fonts from "@/components/CustomFonts";
import ButtonRegister from "@/components/buttonRegister/ButtonRegister";
import Header from "@/components/header/Header";
import Colors from "@/constants/Colors";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const googleIcon = require('@/assets/images/google.png');
const appleIcon = require('@/assets/images/apple.png');
const facebookIcon = require('@/assets/images/facebook.png');

export default function Register() {

  const router = useRouter();
  const { loginWithGoogle } = useAuth();


  const handleBack = () => {
    router.back();
  }

  const handleLogin = () => {
    router.replace('/login');
  }

  const handleRegister = () => {
    router.push('/auth/register');
  }

  const handleGoogleAuth = async () => {
    const success = await loginWithGoogle();
    if (success) {
      router.push('/home');
    }
  }

  return (
    <View style={styles.container}>
      <Header
        title="Criar uma conta"
        onBack={handleBack}
        color={Colors.light.white}
        fontSize={28}
      />

      <View style={styles.content}>
        <View style={styles.buttonContainer}>
          <ButtonRegister title="Continuar com Google" onPress={handleGoogleAuth} image={googleIcon} />
          <ButtonRegister title="Continuar com Apple" onPress={() => { }} image={appleIcon} />
          <ButtonRegister title="Continuar com Facebook" onPress={() => { }} image={facebookIcon} />
          <ButtonRegister title="Continuar com E-mail" onPress={handleRegister} icon={"email-outline"} />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Ja tem uma conta?</Text>
          <Text style={styles.link} onPress={handleLogin}>Entrar</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 16,
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },

  link: {
    ...fonts.semiBold,
    fontSize: 16,
    color: Colors.light.primary,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flex: 1,
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: Colors.light.background,
    height: '100%',
    width: '100%',
    padding: 24,
    gap: 48,
  },
  title: {
    ...fonts.regular,
    fontSize: 16,
  },
});
