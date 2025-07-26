import useAuth from '@/hooks/useAuth';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function Index() {
  const { validateTokenUser } = useAuth();

  useEffect(() => {
    const validate = async () => {
      const response = await validateTokenUser();
      if (response) return router.replace('/home');

      router.replace('/welcome');
    }
    validate();
  }, []);

  return <View />;
}