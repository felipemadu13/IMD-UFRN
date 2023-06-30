import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';


export function Detail({navigation, route}) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.textItem}> Tarefa: {route.params.name}</Text>
            </View>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      padding: 10,
      backgroundColor: '#0D2329',
      flex: 1,
    },
    textItem: {
      fontSize: 20,
      color: "#FFFFFF"
    }
  });
  
  