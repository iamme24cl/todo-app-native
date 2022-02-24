import React from 'react';
import { View, FlatList, StyleSheet, Text} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleUpdateTodoStatus, handleTodoRemove }) => {
  const renderTodoItem = ({item}) => (
    <TodoItem 
      todo={item}
      handleUpdateTodoStatus={handleUpdateTodoStatus}
      handleTodoRemove={handleTodoRemove}
    />
  );

  // console.log(todos)

  return (
    <FlatList 
      data={todos}
      renderItem={renderTodoItem}
      keyExtractor={todo => todo.id}
    />
  )
}

export default TodoList;