import React, { useRef, useEffect } from 'react';
import Colors from "@/constants/Colors";
import { fonts } from "@/components/CustomFonts";
import { View, Text, StyleSheet, Animated } from "react-native";
import { Icon, IconButton } from "react-native-paper";

interface ToastProps {
  show: boolean;
  onClose: () => void;
}

const Toast = ({ show, onClose }: ToastProps) => {
  const slideAnim = useRef(new Animated.Value(120)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: show ? 0 : 120,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [show]);

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY: slideAnim }] }
      ]}
    >
      <IconButton
        icon="close"
        size={24}
        onPress={onClose}
        style={styles.closeButton}
      />
      <View style={styles.content}>
        <Icon source="alert-circle-outline" size={24} color={Colors.light.primary} />
        <Text style={styles.text}>Para continuar, leia e concorde com os Termos e Política de privacidade</Text>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  closeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  text: {
    ...fonts.regular,
    fontSize: 14,
    maxWidth: '90%',
  },

  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 10,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    position: 'absolute',
    backgroundColor: Colors.light.white,
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    borderRadius: 5,
    height: 120,
    zIndex: 1000,
  },
});

export default Toast;