import { StyleSheet, View } from 'react-native';
import React from 'react';
import SwitchSelector from 'react-native-switch-selector';

export default function CustomSwitch() {
  return (
    <View style={styles.container}>
      <SwitchSelector
        initial={0}
        textColor={"#fff"}
        selectedColor={"#fff"}
        borderRadius={10}
        fontSize={20}
        backgroundColor={"#C18C65"}
        buttonColor={"#6E2E00"}
        height={50}
        valuePadding={0}
        onPress={value => setShowHide(value)}
        options={[
            { label: "Sign Up", value: true },
            { label: "Sign In", value: false }
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '80%',

        marginVertical: 12
    }
});