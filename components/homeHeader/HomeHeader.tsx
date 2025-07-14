import Colors from "@/constants/Colors";
import { Image, ImageBackground, ImageSourcePropType, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Icon } from "react-native-paper";
import fonts from "../CustomFonts";
const bellaIcon = require('@/assets/images/bella-icon-outlined.png');

interface HomeHeaderProps {
  title?: string;
  backgroundImage: ImageSourcePropType;
  onPress: () => void;
}

export default function HomeHeader({ title, backgroundImage, onPress }: HomeHeaderProps) {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image} resizeMode="cover" imageStyle={styles.imageStyle}>
        <View style={styles.iconContainer}>
          <Image source={bellaIcon} />
          <TouchableOpacity onPress={onPress}>
            <Icon source="menu" size={24} color="white" />
          </TouchableOpacity>
        </View>
        {title && (
          <Text style={styles.title}>{title}</Text>
        )}
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    ...fonts.heavy,
    fontSize: 32,
    color: Colors.light.white,
    position: 'absolute',
    bottom: 28,
    left: 32,
  },
  container: {
    height: 230,
    width: "100%",
  },

  image: {
    height: "100%",
    width: "100%",
  },

  imageStyle: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 40,
  }
});
