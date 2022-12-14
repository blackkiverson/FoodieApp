import { StyleSheet, Text, Image, View, useWindowDimensions, Button, ScrollView } from 'react-native';
import React from 'react';
import Logo from '../../assets/img/FoodieLogoWhite.png';
import { ImageBackground } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomSwitch from '../components/CustomSwitch';

export default function SignUp() {
    const {height} = useWindowDimensions(height);
    
  return (
    <ScrollView>
      <View>
        <ImageBackground
          source={require("../../assets/img/Background.jpg")}
          style={styles.ImageBackground}
          resizeMode="stretch"
        >
          <View style={{ height: "10%" }} />
          <Image
            source={Logo}
            style={[styles.logo, { height: height * 0.3 }]}
            resizeMode="contain"
          />
          <View style={{ height: "5%" }} />
          <CustomSwitch />
          <Text style={styles.text}>Full Name</Text>
          <CustomInput />
          <Text style={styles.text}>Email Address</Text>
          <CustomInput />
          <Text style={styles.text}>Password</Text>
          <CustomInput />
          <View style={styles.buttonContainer}>
            <Button
              onPress={() => Alert.alert("Simple Button pressed")}
              title="Next"
              style={styles.button}
              color="#fff"
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  logo: {
    maxHeight: "15%",
    maxWidth: "100%",
  },
  text: {
    alignSelf: "flex-start",
    paddingHorizontal: 37,
    color: "#fff",
  },
  ImageBackground: {
    alignItems: "center",
  },
  buttonContainer: {
    color: "#fff",
    backgroundColor: "#6E2E00",
    width: '80%',

    borderRadius: 10,

    paddingVertical: 10,
    marginVertical: 90
  },
});