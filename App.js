import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoItem from './components/TodoItem'
import { getTodos, createTodo, updateTodoStatus, removeTodo} from './utils/api';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todo List</Text>
      <TodoItem />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    marginTop: 70
  }
});
