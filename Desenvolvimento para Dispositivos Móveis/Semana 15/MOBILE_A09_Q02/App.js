import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
    <View style={styles.logoView}>
      <Text style={{fontSize: 40}}>Login</Text>
    </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Senha"
        />
      </View>

      <View style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View>
        <Text>Criar uma conta</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoView: {
    backgroundColor: "#e1e1e6",
    width: '100%',
    height: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    height: '10%',
    backgroundColor: '#e1e1e6',
    justifyContent: 'center',
    marginBottom: 10,
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    height: '10%',
    backgroundColor: '#00b37e',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  loginText: {
    color: 'white',
  },
});

