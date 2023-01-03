import { TO_DO_LIST_ITEMS_KEY } from "@/constants/localStorage";
import { ITodoItem } from "@/types/todo";

export const setLocalStorageItems = (
  value: ITodoItem[] = [],
  key: string = TO_DO_LIST_ITEMS_KEY
) => localStorage.setItem(key, JSON.stringify(value));
