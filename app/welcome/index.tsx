import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
} from 'react-native';

import Button from '@/components/button/Button';

import Colors from '@/constants/Colors';
import Terms from '@/components/terms/Terms';
import fonts from '@/components/CustomFonts';
import Toast from '@/components/toast/Toast';
import { useRouter } from 'expo-router';

const backgroundImage = require('@/assets/images/first-screen.png');
const logoImage = require('@/assets/images/bella-icon.png');

export default function WelcomeScreen() {
  const [checked, setChecked] = useState<boolean>(false);
  const [showToast, setShowToast] = useState<boolean>(false);

  const router = useRouter();

  useEffect(() => {
    if (checked) setShowToast(false);
  }, [checked]);

  const checkedTerms = () => {
    if (!checked) {
      setShowToast(true);
      return true;
    }
    return false;
  }

  const handleCreateAccount = () => {
    if (checkedTerms()) return;
    router.push('/auth');
  }

  const handleLogin = () => {
    if (checkedTerms()) return;
    router.push('/login');
  }

  return (
    <View>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <View style={styles.logoContainer}>
            <Image source={logoImage} />
          </View>
          <View style={styles.bodyContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Bem-vinda ao aplicativo Bella+</Text>
              <Text style={styles.subtitle}>Uma maneira para cuidar melhor de você</Text>
            </View>

            <Terms checked={checked} setChecked={setChecked} />

            <Toast show={showToast} onClose={() => { setShowToast(false) }} />

            <View style={styles.buttonContainer}>
              <Button title="Criar conta" onPress={handleCreateAccount} />
              <Button title="Entrar" variant="outlined" onPress={handleLogin} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
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
    justifyContent: 'space-between',
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
