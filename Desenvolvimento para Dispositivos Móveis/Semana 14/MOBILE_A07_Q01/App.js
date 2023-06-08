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
      <TextInput placeholder="Adicione uma nova tarefa" onChangeText={handleChangeTextInput} value={task} />
      <Button title="Adicionar Tarefa" onPress={handleAddTask} />
      <View>
        <FlatList
          data={taskList}
          renderItem={({ item }) => <Text>{item.task}</Text>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
