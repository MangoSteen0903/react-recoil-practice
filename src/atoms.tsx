import { atom } from "recoil";

export enum Categories {
  "To Do" = "To Do",
  "Test" = "Test",
}
export interface ToDoState {
  id: number;
  text: string;
}

export interface PagesState {
  [key: string]: ToDoState[];
}
export const toDoState = atom<PagesState>({
  key: "toDo",
  default: {
    "To Do": [],
    Test: [],
  },
});

export const categoryList = atom<string[]>({
  key: "categories",
  default: [],
});

export const currentCategory = atom<string>({
  key: "currentCategory",
  default: Categories["To Do"],
});
