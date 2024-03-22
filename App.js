import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding1 from './components/Onboarding1';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding2 from './components/Onboarding2';
import Login from './components/Login';
import { createDrawerNavigator } from '@react-navigation/drawer';



const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
      <Drawer.Screen name ='Onboarding1' component={Onboarding1} options={{headerShown: false}} />
      <Drawer.Screen name ='Onboarding2' component={Onboarding2} options={{headerShown: false}} />
      <Drawer.Screen name ='Login' component={Login} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
