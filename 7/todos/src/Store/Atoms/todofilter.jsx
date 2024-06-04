
import { selector } from "recoil";
import { todocomponent } from "./todocomponent";
import { filterinput } from "./filteratom";

export const todofilter = selector({
    key: 'todofilter',
    get: ({ get }) => {
      const todos = get(todocomponent);
      const filter = get(filterinput).toLowerCase();
      return todos.filter(({ title, description }) =>
        title.toLowerCase().includes(filter) || description.toLowerCase().includes(filter)
      );
    }
  });