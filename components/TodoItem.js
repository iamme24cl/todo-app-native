import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const TodoItem = (props) => {
  const { todo, handleUpdateTodoStatus, handleTodoRemove } = props;

  const show = false;
  console.log(todos)
  
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => alert('clicked')}>
        {show ? (
          <View style={[styles.statusContainer, styles.todoComplete]}>
            <Text>✓</Text>
          </View>) : (
            <View style={[styles.statusContainer, styles.todoInComplete]}></View>
          )}
      </TouchableOpacity>
      <View>
        <Text style={styles.taskContainer}></Text>
      </View>
      <View style={styles.closeBtnContainer}>
        <TouchableOpacity onPress={() => alert('clicked')}>
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
    width: 320
  },
  statusContainer: {
    alignItems: 'center',
    justifyContent:'center',
    width: 30,
    height: 30,
    marginRight: 15,
    color: '#fff',
  },
  todoComplete: {
    backgroundColor: '#1abc9c',
    borderRadius: 50,
  },
  todoInComplete: {
    borderRadius: 50,
    borderColor: '#ececec',
    borderWidth: 1
  },
  taskContainer: {
    fontSize: 18,
    width: 220
  },
  closeBtnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  }
})


export default TodoItem;