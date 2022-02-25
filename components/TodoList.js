import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';

import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos, handleUpdateTodoStatus, handleTodoRemove }) => {
  const renderTodoItem = ({ item, drag, isActive }) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={{ backgroundColor: isActive ? "rgb(168,168,168)" : item.backgroundColor }}
        >
          <TodoItem 
            todo={item}
            handleUpdateTodoStatus={handleUpdateTodoStatus}
            handleTodoRemove={handleTodoRemove}
          />
        </TouchableOpacity>
      </ScaleDecorator>
    );
  }

  return (
    <GestureHandlerRootView>
      <DraggableFlatList style={styles.container}
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={item => item.id}
        onDragEnd={({ data }) => setTodos(data)}
      />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 320
  }
});

export default TodoList;

