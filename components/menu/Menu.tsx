import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Divider, IconButton } from 'react-native-paper';
import OptionMenu from './OptionMenu';

import CalendarIcon from '../../assets/icons/calendar';
import ContactIcon from '../../assets/icons/contact';
import FlowerIcon from '../../assets/icons/flower';
import FormIcon from '../../assets/icons/form';
import HomeIcon from '../../assets/icons/home';
import LogoutIcon from '../../assets/icons/logout';
import PaymentIcon from '../../assets/icons/payment';
import ProfileIcon from '../../assets/icons/profile';
import SecurityIcon from '../../assets/icons/security';
import useMenu from '../../hooks/useMenu';
import useAuth from '@/hooks/useAuth';

interface MenuProps {
  children: React.ReactNode;
}

const Menu = ({ children }: MenuProps) => {
  const { isOpen, toggleMenu, closeMenu } = useMenu();
  const { logoutUser } = useAuth();

  const handleLogout = () => {
    logoutUser();
    closeMenu();
  };

  return (
    <>
      {
        isOpen && <ScrollView >
          <View style={styles.container}>
            <IconButton icon="close" onPress={toggleMenu} style={styles.close} />

            <View style={styles.content}>
              <View style={styles.menu}>
                <OptionMenu icon={<HomeIcon />} title="Tela inicial" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<ProfileIcon />} title="Dados cadastrais" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<CalendarIcon />} title="Meus agendamentos" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<FlowerIcon />} title="Cuidar de mim" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<SecurityIcon />} title="Privacidade" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<PaymentIcon />} title="Forma de pagamento" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<FormIcon />} title="Termos" onPress={() => { }} />
                <Divider />
                <OptionMenu icon={<ContactIcon />} title="Fale conosco" onPress={() => { }} />
              </View>

              <View style={styles.footer}>
                <OptionMenu endIcon icon={<LogoutIcon />} title="Sair" onPress={handleLogout} />
              </View>
            </View>
          </View>
        </ScrollView>
      }

      {!isOpen && children}
    </>
  );
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 36,
    zIndex: 1000,
    width: "100%",
    paddingTop: 60,
  },

  close: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    borderRadius: 100,
    width: "100%",
    paddingHorizontal: 36,
  },

  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },

  menu: {
    gap: 24,
    width: "100%",
  },

  content: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 84,
    width: "100%",
  },
});