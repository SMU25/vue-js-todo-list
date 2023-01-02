import { TO_DO_LIST_ITEMS_KEY } from "@/constants/localStorage";
import { NULL_TYPE, UNDEFINED_TYPE } from "@/constants/types";
import { ITodoItem } from "@/types/todo";

export const getItemLocalStorage = (
  key: string = TO_DO_LIST_ITEMS_KEY
): ITodoItem[] => {
  const stringifyItem = localStorage.getItem(key);

  if (
    !stringifyItem ||
    stringifyItem.includes(NULL_TYPE) ||
    stringifyItem.includes(UNDEFINED_TYPE)
  ) {
    return [];
  } else {
    return JSON.parse(stringifyItem);
  }
};
