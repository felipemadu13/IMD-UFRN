import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export function ContatosDetalhe({ route, navigation }) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      <Text style={{color: "#fb8500", fontWeight: 'bold', fontSize: 25}}>{contact.name}</Text>
      <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Username:</Text> {contact.username}</Text>
      <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Email:</Text> {contact.email}</Text>
      <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Contato:</Text> {contact.phone}</Text>
      <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Website:</Text> {contact.website}</Text>
      <View style={{marginTop: 10}}>
        <Text style={{color: "#fb8500", fontWeight: 'bold', fontSize: 20}} >Endereço: </Text>
        <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Rua/Avenida:</Text> {contact.address.street}</Text>
        <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Complemento:</Text> {contact.address.suite}</Text>
        <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Cidade:</Text> {contact.address.city}</Text>
        <Text style={{color: "#FFFFFF"}}><Text style={{color: "#fb8500", fontWeight: 'bold'}}>Código Postal:</Text> {contact.address.zipcode}</Text>
      </View>
      <Button title="VOLTAR" onPress={() => { navigation.navigate('Home', { name: 'Home' }) }} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingLeft: 15,
    backgroundColor: '#023047'
  },
});
