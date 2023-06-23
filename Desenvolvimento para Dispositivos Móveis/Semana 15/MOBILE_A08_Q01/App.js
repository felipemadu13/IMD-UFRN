import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, Alert, FlatList } from 'react-native';

export default function App() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  function handleChangeTextInput(text) {
    setTask(text);
  }

  function handleAddTask() {
    if (task === '') {
      Alert.alert('Erro', 'Adicione uma tarefa');
    } else {
      const newTask = { id: Math.random().toString(), task: task };
      setTaskList((prevState) => [...prevState, newTask]);
    }
    setTask('');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text> To Do APP</Text>
      <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" onChangeText={handleChangeTextInput} value={task} />
      <View style={styles.botao}>
        <Button color={'black'} title="Adicionar Tarefa" onPress={handleAddTask} />
      </View>
      <View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => <View style={styles.listaItem}><Text style={styles.textItem}>{item.task}</Text></View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#000000',
    padding: 10,
    // flex: 1 // fica feio =/
  },
  botao: {
    width: '40%',
    backgroundColor: '#808080',
    paddingVertical: 10
  },
  listaItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#808080',
    borderColor: '#000000',
    borderWidth: 1,
    width: 200,
  },
  textItem: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
