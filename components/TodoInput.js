
import React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TextInput, TouchableOpacity, Platform, Keyboard} from "react-native";
import { MaterialIcons } from '@expo/vector-icons'; 

const TodoInput = ({ task, setTask, handleTodoCreate }) => {
  const handleOnPress = () => {
    const newTodo = {
      task: task,
      isCompleted: false
    };
    handleTodoCreate(newTodo);
    setTask("");
    Keyboard.dismiss();
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TextInput 
        style={styles.input}
        onChangeText={text => setTask(text)} 
        placeholder="Enter a new todo..."
        value={task}
      />
      <View style={styles.button}>
        <TouchableOpacity onPress={handleOnPress}>
          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    width: 320,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative'
  },
  input: {
    height: 50,
    width: 320,
    borderWidth: 1,
    borderColor: '#ececec',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: 'rgb(168,168,168)',
    height: 30,
    width: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 8,
    right: 8
  },
});

export default TodoInput;