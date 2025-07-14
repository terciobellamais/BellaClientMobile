import Button from "@/components/button/Button";
import ButtonLogin from "@/components/buttonLogin/ButtonLogin";
import fonts from "@/components/CustomFonts";
import BellaTextInput from "@/components/textInput/TextInput";
import Colors from "@/constants/Colors";
import useAddPhone from "@/hooks/useAddPhone";
import useAuth from "@/hooks/useAuth";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const backgroundImage = require('@/assets/images/first-screen.png');
const logoImage = require('@/assets/images/bella-icon.png');

const googleIcon = require('@/assets/images/google.png');
const appleIcon = require('@/assets/images/apple.png');
const facebookIcon = require('@/assets/images/facebook.png');

enum LoginExternal {
  GOOGLE = 'google',
  APPLE = 'apple',
  FACEBOOK = 'facebook',
}

type LoginProps = {
  email: string;
  password: string;
}

export default function LoginScreen() {
  const router = useRouter();
  const { loginUser, loginWithGoogle } = useAuth();
  const { handleIsPhoneVerified } = useAddPhone();  

  const [login, setLogin] = useState<LoginProps>({
    email: '',
    password: '',
  });

  const setLoginEmail = (email: string) => {
    setLogin({ ...login, email });
  }

  const setLoginPassword = (password: string) => {
    setLogin({ ...login, password });
  }

  const handleLogin = async () => {
    const response = await loginUser(login);
    const isPhoneVerified = await handleIsPhoneVerified();

    if (!isPhoneVerified.success) {
      router.push('/addPhone');
      return;
    }

    if (response) {
      if (isPhoneVerified.success) router.push('/home');
      else router.push('/addPhone');
    }
    else Alert.alert('Erro', 'Erro ao fazer login.');
  }

  const loginExternal = (type: LoginExternal) => {
    console.log('login external', type);
  }

  const handleLoginFacebook = () => {
    loginExternal(LoginExternal.FACEBOOK);
  }

  const handleLoginApple = () => {
    loginExternal(LoginExternal.APPLE);
  }

  const handleLoginGoogle = async () => {
    const success = await loginWithGoogle();
    if (success) {
      router.push('/home');
    }
  }

  return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logoImage} />
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.buttonContainer}>
              <BellaTextInput
                placeholder="Email"
                icon="email-outline"
                onChangeText={setLoginEmail}
                value={login.email}
              />
              <BellaTextInput
                placeholder="Senha"
                icon="lock-outline"
                onChangeText={setLoginPassword}
                value={login.password}
                secureTextEntry={true}
              />
              <View style={styles.forgotPasswordContainer}>
                <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
              </View>

              <Button title="Continuar" onPress={handleLogin} />

              <View style={styles.buttonContainer}>
                <Text style={styles.text}>OU</Text>
              </View>

              <View style={styles.iconsContainer}>
                <ButtonLogin icon={facebookIcon} onPress={handleLoginFacebook} />
                <ButtonLogin icon={appleIcon} onPress={handleLoginApple} />
                <ButtonLogin icon={googleIcon} onPress={handleLoginGoogle} />
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  iconsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },

  text: {
    ...fonts.regular,
    fontSize: 14,
    color: Colors.light.white,
  },

  forgotPasswordContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    textDecorationLine: 'underline',

  },

  forgotPassword: {
    color: Colors.light.primary,
    fontSize: 16,
    textAlign: 'right',
    textDecorationLine: 'underline',
  },

  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },

  primaryButton: {
    backgroundColor: Colors.light.primary,
    borderColor: Colors.light.primary,
  },

  secondaryButton: {
    borderColor: Colors.light.white,
  },

  buttonText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: 20,
  },

  button: {
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    width: '100%',
    padding: 16,
  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 18,
  },

  title: {
    ...fonts.heavy,
    display: 'flex',
    textAlign: 'center',
    flexWrap: 'wrap',
    fontSize: 24,
    color: '#fff',
    maxWidth: 200,
  },

  subtitle: {
    ...fonts.heavy,
    fontSize: 14,
    color: '#fff',
  },

  logoContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 28,
    paddingTop: 56,
  },

  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  bodyContainer: {
    padding: 28,
    gap: 28,
    width: '100%',
  },
});
