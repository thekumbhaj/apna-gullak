import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Register from './screens/Register';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();
export default function App() {
  return (
  
  
    <NavigationContainer>

    <Stack.Navigator screenOptions={{ headerShown: false}}>
      <Stack.Screen name="Home" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>

    </NavigationContainer>
    


  );
}

const styles = StyleSheet.create({
  
});
