import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function Home({ navigation }) {
  const [contatos, setContatos] = useState([]);

  const contatosJson = async () => {
    const usuarios = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await usuarios.json();
    setContatos(data);
  };
  
  useEffect(() => {
    contatosJson();
  }, []);

  const renderContato = ({ item }) => (
    <View style={styles.contato}>
      <View style={styles.contatoDetalhe}>
        <Image source={require('../assets/cell.svg')} style={{ width: 30, height: 30 }} />
        <View style={styles.imagemContato}>
          <Text style={{color: "#fb8500", fontWeight: 'bold'}}>{item.name}</Text>
          <Text style={{color: "#FFFFFF"}}>{item.phone}</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Detalhe', { contact: item })}>
          <Image source={require('../assets/arrow.svg')} />
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={{color: "#fb8500", fontWeight: 'bold', fontSize: 25}}>Lista de Contatos</Text>
      <FlatList
        data={contatos}
        renderItem={renderContato}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    backgroundColor: '#023047'
  },
  contato: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#004466',
    flex:1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  contatoDetalhe: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
