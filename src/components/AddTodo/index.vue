<script lang="ts" setup>
import { ref, toRefs } from "vue";
import IconPlus from "@/components/icons/IconPlus.vue";

const INPUT_PLACEHOLDER = "Please, enter your todo...";

interface Props {
  addTodoItem: (text: string) => void;
}

const props = defineProps<Props>();
const { addTodoItem } = toRefs(props);

const inputValue = ref("");

const addNewTodoItem = () => {
  addTodoItem.value(inputValue.value);

  inputValue.value = "";
};
</script>

<template>
  <div class="todo__add-field">
    <input
      type="text"
      v-model="inputValue"
      :placeholder="INPUT_PLACEHOLDER"
      @keyup.enter="addNewTodoItem"
    />
    <button class="todo__add-field-button" @click="addNewTodoItem">
      <IconPlus />
    </button>
  </div>
</template>
