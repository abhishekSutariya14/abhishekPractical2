import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, FlatList} from 'react-native';
import {styles} from './styles';

export const Home = () => {
  const [taskText, setTaskText] = useState('');
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]);

  const addTask = () => {
    if (taskText.trim() !== '') {
      setTasks([...tasks, taskText]);
      setFilteredTasks([...tasks, taskText]);
      setTaskText('');
    }
  };

  const deleteTask = index => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setFilteredTasks(updatedTasks);
  };

  const filterTasks = text => {
    setTaskText(text);
    const filtered = tasks.filter(task =>
      task.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredTasks(filtered);
  };

  const renderTaskItem = ({item, index}) => (
    <View key={index} style={styles.taskItem}>
      <Text>{item}</Text>
      <TouchableOpacity onPress={() => deleteTask(filteredTasks.indexOf(item))}>
        <Text style={styles.deleteButton}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  const groupTasksByFirstLetter = task => {
    const groupedTasks = {};
    task.forEach(taskData => {
      const firstLetter = taskData[0].toUpperCase();
      if (groupedTasks[firstLetter]) {
        groupedTasks[firstLetter].push(taskData);
      } else {
        groupedTasks[firstLetter] = [taskData];
      }
    });
    return Object.entries(groupedTasks).map(([title, data]) => ({
      title,
      data,
    }));
  };

  const flatTasks = groupTasksByFirstLetter(filteredTasks).reduce(
    (accumulator, {title, data}) => [...accumulator, title, ...data],
    [],
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task..."
        value={taskText}
        onChangeText={filterTasks}
      />
      <TouchableOpacity style={styles.addButton} onPress={addTask}>
        <Text style={styles.addButtonText}>Add Task</Text>
      </TouchableOpacity>
      <FlatList
        data={flatTasks}
        renderItem={renderTaskItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};
