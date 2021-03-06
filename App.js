import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getTodos, createTodo, updateTodoStatus, removeTodo } from './utils/api';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BalsamiqSans_400Regular,
} from '@expo-google-fonts/balsamiq-sans';

export default function App() {
  let [fontsLoaded] = useFonts({ BalsamiqSans_400Regular });
  const [todos, setTodos] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [task, setTask] = useState('');

  useEffect(() => {
    getTodos(setIsFetching, setTodos);
  }, []);

  const handleTodoCreate = (todo) => {
    createTodo(todo, todos, setTodos);
  }

  const handleUpdateTodoStatus = (id) => {
    updateTodoStatus(id, todos, setTodos);
  }

  const handleTodoRemove = (id) => {
    removeTodo(id, todos, setTodos);
  }

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{isFetching ? "Loading Todos...." : "My Todo List"}</Text>
      <TodoInput
        task={task}
        setTask={setTask}
        handleTodoCreate={handleTodoCreate}
      />
      <TodoList
        setTodos={setTodos}
        todos={todos}
        handleUpdateTodoStatus={handleUpdateTodoStatus}
        handleTodoRemove={handleTodoRemove}
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
    marginTop: 70,
    fontFamily: 'BalsamiqSans_400Regular'
  }
});
