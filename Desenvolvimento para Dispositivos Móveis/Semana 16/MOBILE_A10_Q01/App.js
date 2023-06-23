import React from 'react';
import { FlatList, SafeAreaView, View, Image, StyleSheet, Text } from 'react-native';

const DATA = [
  { ID: 1, ORIGEM: "local", URL: require("./assets/fotos/01.jpg")},
  { ID: 2, ORIGEM: "local", URL: require("./assets/fotos/02.jpg")},
  { ID: 3, ORIGEM: "local", URL: require("./assets/fotos/03.jpg")},
  { ID: 4, ORIGEM: "local", URL: require("./assets/fotos/04.jpg")},
  { ID: 5, ORIGEM: "local", URL: require("./assets/fotos/05.jpg")},
  { ID: 6, ORIGEM: "local", URL: require("./assets/fotos/06.jpg")},
  { ID: 7, ORIGEM: "local", URL: require("./assets/fotos/07.jpg")},
  { ID: 8, ORIGEM: "local", URL: require("./assets/fotos/08.jpg")},
  { ID: 9, ORIGEM: "local", URL: require("./assets/fotos/09.jpg")},
  { ID: 10, ORIGEM: "local", URL: require("./assets/fotos/10.jpg")},
  { ID: 11, ORIGEM: "internet", URL: 'https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80'},
  { ID: 12, ORIGEM: "internet", URL: 'https://images.unsplash.com/photo-1489436969537-cf0c1dc69cba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=312&q=80'},
];

function Item({ URL, ORIGEM }) {
  return (
    <View style={styles.item}>
      {ORIGEM === 'local' ? (<Image source={URL} style={styles.imagem} />) : (<Image source={{ uri: URL }} style={styles.imagem} />)}
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Galeria</Text>
      <FlatList
        numColumns={4}
        data={DATA}
        renderItem={({ item }) => <Item URL={item.URL} ORIGEM={item.ORIGEM} />}
        keyExtractor={(item) => item.ID.toString()}
        contentContainerStyle={styles.flatListContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: "15%",
  },
  flatListContent: {
    justifyContent: 'center',
    paddingVertical: 20,
  },
  item: {
    margin: 1,
  },
  imagem: {
    height: 100,
    width: 100
  },
});
