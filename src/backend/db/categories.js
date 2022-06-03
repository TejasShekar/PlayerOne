import {v4 as uuid} from "uuid";
export const categories = [
  {
    _id: uuid(),
    category: "action",
    src: "https://raw.githubusercontent.com/TejasShekar/P8-Games/dev/src/assets/action.webp",
    name: "Action Games",
  },
  {
    _id: uuid(),
    category: "adventure",
    src: "https://raw.githubusercontent.com/TejasShekar/P8-Games/dev/src/assets/adventure.webp",
    name: "Adventure Games",
  },
  {
    _id: uuid(),
    category: "racing",
    src: "https://raw.githubusercontent.com/TejasShekar/P8-Games/dev/src/assets/racing.webp",
    name: "Racing Games",
  },
  {
    _id: uuid(),
    category: "sports",
    src: "https://github.com/TejasShekar/P8-Games/blob/dev/src/assets/sports.webp",
    name: "Sports Games",
  },
];
