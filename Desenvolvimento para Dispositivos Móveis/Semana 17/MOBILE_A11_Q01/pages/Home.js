import React, { useState } from 'react';
import { View, Text, TextInput, Button, SafeAreaView, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';

export function Home({navigation}) {
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

  function TodayDate() {
      const currentDate = new Date();
      const day = currentDate.getDate();
      const month = currentDate.getMonth();
      const year = currentDate.getFullYear();

      const mesesDoAno = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto','Setembro','Outubro','Novembro', 'Dezembro',];

      const formattedDate = `${day} de ${mesesDoAno[month]} de ${year}`;
      return formattedDate

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.date}>
        <Text style={styles.dateText}> MEU DIA</Text>
        <Text style={styles.dateText}><TodayDate /></Text>
      </View>
      <TextInput style={styles.input} placeholder="Adicione uma nova tarefa" onChangeText={handleChangeTextInput} value={task} />
      <View>
        <Button color={'rgba(52, 52, 52, 0.0)'} title="Adicionar Tarefa" onPress={handleAddTask} />
      </View>
      <View>
        <FlatList
          data={taskList}
          renderItem={
            ({ item }) =>
            <TouchableOpacity onPress={() => navigation.navigate('Detail', {name: item.task})}>
              <View style={styles.listaItem}>
                <Text style={styles.textItem}>{item.task}</Text>
              </View>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
        />
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
  date: {
    alignItems: 'center',
    marginTop: 40,
    marginBottom: 10
  },
  dateText: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  input: {
    width: '80%',
    color: "#FFFFFF",
    backgroundColor: "#2B5864",
    placeholderColor: "#FFFFFF",
    borderColor: '#000000',
    borderRadius: 4,
    padding: 10,
    marginVertical: 10
  },
  listaItem: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 4,
    backgroundColor: '#05664F',
    width: 250,
  },
  textItem: {
    fontSize: 14,
    color: "#FFFFFF"
  }
});

