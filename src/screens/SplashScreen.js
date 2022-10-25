import { StyleSheet, View, Image, useWindowDimensions } from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogoWhiteShadow.png'
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen(navigator) {
    const {height} = useWindowDimensions();

  return (
    <View>
      <LinearGradient
        colors={["#B87B4E", "#EDAA78", "#B87B4E"]}
        style={styles.background}
      >
        <Image
            source={Logo}
            style={[styles.logo, {height: height * 0.3}]}
            resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
    background: {
        maxWidth: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    logo: {
        /* Telling the image to take up all the space it can. */
        flex: 1,
        maxWidth: '100%',
        maxHeight: '20%'
    }
});
