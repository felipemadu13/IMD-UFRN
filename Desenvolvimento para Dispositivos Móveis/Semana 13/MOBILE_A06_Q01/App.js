import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

export default function App() {
  return(
    <>
      <Logo />
      <Input />
    </>
  )
}

function Logo() {
  return (
    <View style={styles.containerImg}>
      <Image source={require('./assets/xcalc_logo.png')} />
    </View>
  );
}

function Input() {
  const [result, setResult] = useState('');
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [par, setPar] = useState('');

  function mathHandler() {

    const resultado = parseFloat(valor1) + parseFloat(valor2);

    if (resultado == 0) {
      setResult(`O resultado é ${resultado}, o número é par e igual a zero`)
      setPar('./assets/plus.png')
    } else if (resultado % 2 == 0 && resultado > 0) {
      setResult(`O resultado é ${resultado}, o número é par e maior que zero`)
      setPar('./assets/plus.png')
    } else if (resultado % 2 == 0 && resultado < 0) {
      setResult(`O resultado é ${resultado}, o número é par e menor que zero`)
      setPar('./assets/plus.png')
    } else if (resultado % 2 !== 0 && resultado > 0) {
      setResult(`O resultado é ${resultado}, o número é impar e maior que zero`)
    } else if (resultado % 2 !== 0 && resultado < 0) {
      setResult(`O resultado é ${resultado}, o número é impar e menor que zero`)
    }

  }

  return(
    <View style={styles.container}>
      <Text 
        style={styles.containerText}>Digite o valor 1:</Text>
      <TextInput
        style={styles.containerTextInput}
        onChangeText={(valor) => setValor1(valor)}
        keyboardType="numeric"
        placeholder="Ex: 5"
        placeholderTextColor='#d8d8d8'
      />
      <Text style={styles.containerText}>Digite o valor 2:</Text>
      <TextInput
        style={styles.containerTextInput}
        onChangeText={(valor) => setValor2(valor)}
        keyboardType="numeric"
        placeholder="Ex: 10"
        placeholderTextColor='#d8d8d8'
      />
      <Button onPress={mathHandler} title="Soma" />
      <Text
        style={styles.containerText}>{result}
      </Text>
      <Image style={styles.containerPar} source={par ? require('./assets/plus.png') : require('./assets/minus.png')} />

    </View>)
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#344e41',
    alignItems: 'center',
  },
  containerText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  containerTextInput: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: "#FFFFFF"
  },
  containerImg: {
    flex: 1,
    backgroundColor: '#344e41',
    alignItems: 'center',
  },
  containerPar: {
    width: 50,
    height: 50,
  }
});
