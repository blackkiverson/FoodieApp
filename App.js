import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import SignUp from './src/screens/SignUp';
 
export default function App() {
  return (
    <View style={styles.container}>
      <SignUp/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
