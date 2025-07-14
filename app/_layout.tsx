import {
  Outfit_400Regular,
  Outfit_500Medium,
  Outfit_600SemiBold,
  Outfit_700Bold
} from '@expo-google-fonts/outfit';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { MenuProvider } from '@/hooks/useMenu';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Outfit: Outfit_400Regular,
    'Outfit-Medium': Outfit_500Medium,
    'Outfit-SemiBold': Outfit_600SemiBold,
    'Outfit-Bold': Outfit_700Bold,
    ...FontAwesome.font,
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <MenuProvider>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
          presentation: 'card',
          animationDuration: 300,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
        }}>
          <Stack.Screen name="addPhone" options={{ animation: 'fade_from_bottom' }} />
          <Stack.Screen name="welcome" />
          <Stack.Screen name="login" />
          <Stack.Screen name="auth" options={{ animation: 'fade_from_bottom' }} />
          <Stack.Screen name="home" />
          <Stack.Screen name="appointments" options={{ animation: 'fade_from_bottom' }} />
          <Stack.Screen name="checkIn" options={{ animation: 'fade_from_bottom' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
    </MenuProvider>
  );
}
