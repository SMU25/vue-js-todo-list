<script lang="ts" setup>
import { ref, toRefs, watch } from "vue";
import IconTrash from "@/components/icons/IconTrash.vue";

type VoidFuncWithIdValue = (id: number) => void;

interface Props {
  id: number;
  text: string;
  isDone: boolean;
  checkTodoItem: VoidFuncWithIdValue;
  updateTodoItemText: (id: number, value: string) => void;
  removeTodoItem: VoidFuncWithIdValue;
}

const props = defineProps<Props>();
const { id, text, isDone, removeTodoItem, checkTodoItem, updateTodoItemText } =
  toRefs(props);

const inputValue = ref(text.value);

watch(inputValue, () => updateTodoItemText.value(id.value, inputValue.value));
</script>

<template>
  <div :class="['todo__list-item', { 'todo__list-item--completed': isDone }]">
    <button class="todo__list-item-check" @click="checkTodoItem(id)">
      <img v-if="isDone" src="@/assets/check.svg" />
    </button>
    <input class="todo__list-item-input" v-model="inputValue" />
    <button class="todo__list-item-remove" @click="removeTodoItem(id)">
      <IconTrash />
    </button>
  </div>
</template>
