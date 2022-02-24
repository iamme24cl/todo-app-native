import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoList from './components/TodoList'
import { getTodos, createTodo, updateTodoStatus, removeTodo} from './utils/api';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    getTodos(setIsFetching, setTodos);
  }, [])
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todo List</Text>
      <TodoList
        todos={todos}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: StatusBar.currentHeight || 0,
  },
  text: {
    fontSize: 28,
    marginTop: 50
  }
});
