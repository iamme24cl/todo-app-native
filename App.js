import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { getTodos, createTodo, updateTodoStatus, removeTodo } from './utils/api';

export default function App() {
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

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Todo List</Text>
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
    marginTop: 70
  }
});
