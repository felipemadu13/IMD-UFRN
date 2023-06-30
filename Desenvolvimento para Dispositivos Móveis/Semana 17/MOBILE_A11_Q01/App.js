import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import { Home } from './pages/Home';
import { Detail } from './pages/Detail';

export default function App() {
 
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{title: 'Lista de Tarefas'}} />
        <Stack.Screen name="Detail" component={Detail} options={{title: 'Detalhe Tarefa'}} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
