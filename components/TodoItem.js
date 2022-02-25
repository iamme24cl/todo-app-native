import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import {
  useFonts,
  BalsamiqSans_400Regular,
} from '@expo-google-fonts/balsamiq-sans';

const TodoItem = ({ todo, handleUpdateTodoStatus, handleTodoRemove }) => {
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleUpdateTodoStatus(todo.id)}>
        {todo.isCompleted ? (
          <View style={[styles.statusContainer, styles.todoComplete]}>
            <Text style={styles.text}>✓</Text>
          </View>) : (
            <View style={[styles.statusContainer, styles.todoInComplete]}></View>
          )}
      </TouchableOpacity>
      <View>
        <Text style={styles.taskContainer}>{todo.task}</Text>
      </View>
      <View style={styles.closeBtnContainer}>
        <TouchableOpacity onPress={() => handleTodoRemove(todo.id)}>
          <MaterialIcons name="delete" size={18} color='black' />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 1,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ececec',
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent:'center',
    width: 30,
    height: 30,
    marginRight: 15,
  },
  todoComplete: {
    backgroundColor: '#1abc9c',
    borderRadius: 50,
    color: '#fff',
  },
  todoInComplete: {
    borderRadius: 50,
    borderColor: '#ececec',
    borderWidth: 1
  },
  taskContainer: {
    fontFamily: 'BalsamiqSans_400Regular',
    fontSize: 18,
    width: 220
  },
  closeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 18
  }
})


export default TodoItem;