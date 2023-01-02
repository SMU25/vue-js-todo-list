<script lang="ts" setup>
import { ref } from "vue";
import TodoItem from "./components/TodoItem/index.vue";

const HEADING = "My todos";

let id = 0;

const todoList = ref([
  { id: ++id, text: "213", isDone: false },
  { id: ++id, text: "sadasd", isDone: true },
]);

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
    <div class="todo__add-field">
      <input type="text" placeholder="Please, enter your todo..." />
      <button class="todo__add-field-button">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.875 7.875H10.125V1.125C10.125 0.826631 10.0065 0.540484 9.79549 0.329505C9.58452 0.118527 9.29837 0 9 0C8.70163 0 8.41548 0.118527 8.20451 0.329505C7.99353 0.540484 7.875 0.826631 7.875 1.125V7.875H1.125C0.826631 7.875 0.540484 7.99353 0.329505 8.20451C0.118527 8.41548 0 8.70163 0 9C0 9.29837 0.118527 9.58452 0.329505 9.79549C0.540484 10.0065 0.826631 10.125 1.125 10.125H7.875V16.875C7.875 17.1734 7.99353 17.4595 8.20451 17.6705C8.41548 17.8815 8.70163 18 9 18C9.29837 18 9.58452 17.8815 9.79549 17.6705C10.0065 17.4595 10.125 17.1734 10.125 16.875V10.125H16.875C17.1734 10.125 17.4595 10.0065 17.6705 9.79549C17.8815 9.58452 18 9.29837 18 9C18 8.70163 17.8815 8.41548 17.6705 8.20451C17.4595 7.99353 17.1734 7.875 16.875 7.875Z"
            fill="#C7C7C7"
          />
        </svg>
      </button>
    </div>
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
