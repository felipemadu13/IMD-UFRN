import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Home } from "./pages/Home"
import { Detail } from "./pages/Detail"

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} options={{title: 'DETALHE POST'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};