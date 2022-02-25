import React from 'react';
import { View, FlatList, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, handleUpdateTodoStatus, handleTodoRemove }) => {
  const renderTodoItem = ({item}) => (
    <TodoItem 
      todo={item}
      handleUpdateTodoStatus={handleUpdateTodoStatus}
      handleTodoRemove={handleTodoRemove}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList 
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={todo => todo.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 320
  }
});

export default TodoList;