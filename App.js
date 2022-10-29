import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import SplashScreen from './src/screens/SplashScreen';
import SignUpNoSwitch from './src/screens/SignUpNoSwitch';
import SignIn from './src/screens/SignIn';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
 
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
    <StatusBar style='auto'/>
      <Stack.Navigator initialRouteName='SplashScreen'>
        <Stack.Screen
          name='SplashScreen'
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name='SignIn'
          component={SignIn}
        />
        <Stack.Screen
          name='SignUpNoSwitch'
          component={SignUpNoSwitch}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
