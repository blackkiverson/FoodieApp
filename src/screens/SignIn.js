import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const SignIn = () => {
  return (
    <View style={styles.container}>
      <Text>Sign In</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  }
});

export default SignIn;