import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';

export default function CustomInput() {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input}
        placeholder='Placeholder'
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        padding: 17,
        backgroundColor: '#fff',
        width: '80%',

        borderRadius: 10,

        paddingHorizontal: 10,
        marginVertical: 15
    },
    input: {}
});