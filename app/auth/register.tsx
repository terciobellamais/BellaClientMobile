import fonts from "@/components/CustomFonts";
import Button from "@/components/button/Button";
import ButtonLogin from "@/components/buttonLogin/ButtonLogin";
import Header from "@/components/header/Header";
import TextInputBella from "@/components/textInputBella/TextInputBella";
import Colors from "@/constants/Colors";
import { RegisterUser } from "@/hooks/@types/Auth.type";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { SetStateAction, useCallback, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

const googleIcon = require('@/assets/images/google.png');
const appleIcon = require('@/assets/images/apple.png');
const facebookIcon = require('@/assets/images/facebook.png');

const Register = () => {
  const router = useRouter();
  const { registerUser } = useAuth();

  const [form, setForm] = useState<RegisterUser>({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });

  const handleInfoForm = useCallback((name: string) =>
    (value: SetStateAction<string>) => setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    })), [setForm]);

  const handleSubmit = async () => {
    if (form.password.length < 8) {
      Alert.alert('Erro', 'A senha deve ter mais de 8 caracteres.');
      return;
    }

    const response = await registerUser(form);
    if (response.ok) {
      router.push('/addPhone');
    } else {
      Alert.alert('Erro', 'Erro ao registrar usuário.');
    }
  };

  const handleTermsPress = () => {
    // router.push('/terms');
  }
  const handlePrivacyPress = () => {
    // router.push('/privacy');
  }

  const handleBack = () => {
    router.back();
  }

  const handleLogin = () => {
    router.push('/login');
  }

  const handleLoginFacebook = () => {
    console.log('login facebook');
  }
  const handleLoginApple = () => {
    console.log('login apple');
  }
  const handleLoginGoogle = () => {
    console.log('login google');
  }

  return (
    <View style={styles.container}>
      <Header
        onBack={handleBack}
        title="Criar uma conta"
        color={Colors.light.white}
        fontSize={28}
      />
      <View style={styles.content}>

        <View style={styles.titleContainer}>
          <Text style={styles.title}>Bem-vinda ao Bella+</Text>
          <Text style={styles.subtitle}>Crie uma conta para ter acesso aos melhores métodos e clínicas para a sua saúde</Text>
        </View>

        <View style={styles.containerForm}>
          <TextInputBella label="Nome" value={form.firstName} setValue={handleInfoForm('firstName')} />
          <TextInputBella label="Sobrenome" value={form.lastName} setValue={handleInfoForm('lastName')} />
          <TextInputBella label="Email" value={form.email} setValue={handleInfoForm('email')} />
          <TextInputBella label="Senha" value={form.password} setValue={handleInfoForm('password')} type="password" />
        </View>

        <View style={styles.termsContainer}>
          <Text style={styles.terms}>
            Ao confimar você concorda com os{" "}
            <Text style={styles.link} onPress={handleTermsPress}>
              Termos e Condições
            </Text> e com a <Text style={styles.link} onPress={handlePrivacyPress}>
              Política de Privacidade
            </Text> do Bella+
          </Text>
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Continuar" onPress={handleSubmit} />

          <View>
            <Text style={styles.text}>OU</Text>
          </View>

          <View style={styles.iconsContainer}>
            <ButtonLogin icon={facebookIcon} onPress={handleLoginFacebook} />
            <ButtonLogin icon={appleIcon} onPress={handleLoginApple} />
            <ButtonLogin icon={googleIcon} onPress={handleLoginGoogle} />
          </View>

          <View>
            <Text style={styles.text}>Já tem uma conta? <Text style={styles.link} onPress={handleLogin}>Entrar</Text></Text>
          </View>
        </View>

      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({

  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },

  text: {
    fontSize: 14,
    color: Colors.light.text,
  },

  containerForm: {
    width: '100%',
    paddingVertical: 4,
  },

  terms: {
    ...fonts.regular,
    fontSize: 14,
    color: Colors.light.text,
  },

  termsContainer: {
    display: 'flex',
    flex: 1,
    gap: 8,
    paddingTop: 8,
  },

  link: {
    color: Colors.light.primary,
    textDecorationLine: 'underline',
  },

  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },

  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    width: '100%',
    height: '100%',
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 8,
    width: '100%',
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    padding: 24,
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: 8,
  },

  title: {
    ...fonts.heavy,
    fontSize: 24,
    color: Colors.light.text,
  },

  subtitle: {
    ...fonts.regular,
    fontSize: 16,
    color: Colors.light.text,
  },
});
