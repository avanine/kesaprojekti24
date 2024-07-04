import { useState } from 'react';
import { StyleSheet, Text, FlatList, Alert, Keyboard } from 'react-native';

import Input from './Input';
import Button from './Button';

const TaskList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (!task.trim()) {
      Alert.alert('Error', 'Please enter a task');
      return;
    }
    const newTasks = [...tasks, { key: Math.random().toString(), text: task }];
    setTasks(newTasks);
    setTask('');
    Keyboard.dismiss();
  };

  return (
    <>
      <Input label="New Task" value={task} onChangeText={setTask} />
      <Button title="Add" onPress={addTask} />
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Text style={styles.task}>{item.text}</Text>}
      />
    </>
  );
}

const styles = StyleSheet.create({
  task: {
    fontSize: 18,
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
});

export default TaskList;