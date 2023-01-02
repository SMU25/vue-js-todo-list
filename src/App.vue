<script lang="ts" setup>
import { ref } from "vue";
import AddTodo from "./components/AddTodo/index.vue";
import TodoItem from "./components/TodoItem/index.vue";

const HEADING = "My todos";

let id = 0;

const todoList = ref([
  { id: ++id, text: "213", isDone: false },
  { id: ++id, text: "sadasd", isDone: true },
]);

const addTodoItem = (text: string) => {
  if (text) {
    const newTodoItem = { id: ++id, isDone: false, text };

    todoList.value.push(newTodoItem);
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
