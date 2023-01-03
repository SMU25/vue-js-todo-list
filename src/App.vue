<script lang="ts" setup>
import { ref, watch } from "vue";
import AddTodo from "./components/AddTodo/index.vue";
import TodoItem from "./components/TodoItem/index.vue";
import { createNumberId } from "./utils/createNumberId";
import { getLocalStorageItems } from "./utils/localStorage/getLocalStorageItems";
import { setLocalStorageItems } from "./utils/localStorage/setLocalStorageItems";

const HEADING = "My todos";

const todoList = ref(getLocalStorageItems());

const addTodoItem = (text: string) => {
  if (text) {
    const newTodoItem = { id: createNumberId(), isDone: false, text };

    todoList.value = [...todoList.value, newTodoItem];
  } else {
    alert("Please, enter your todo!");
  }
};

const checkTodoItem = (id: number) => {
  todoList.value = todoList.value.map((item) =>
    item.id === id ? { ...item, isDone: !item.isDone } : item
  );
};

const updateTodoItemText = (id: number, value: string) => {
  todoList.value = todoList.value.map((item) =>
    item.id === id ? { ...item, text: value } : item
  );
};

const removeTodoItem = (id: number) => {
  todoList.value = todoList.value.filter((item) => item.id !== id);
};

watch(todoList, () => setLocalStorageItems(todoList.value));
</script>

<template>
  <div class="todo">
    <div class="todo__header">
      <h4>{{ HEADING }}</h4>
    </div>
    <AddTodo :addTodoItem="addTodoItem" />
    <div v-if="todoList?.length" class="todo__list">
      <TodoItem
        v-for="item in todoList"
        :key="item.id"
        :checkTodoItem="checkTodoItem"
        :updateTodoItemText="updateTodoItemText"
        :removeTodoItem="removeTodoItem"
        :="item"
      />
    </div>
  </div>
</template>
