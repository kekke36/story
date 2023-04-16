import { rest } from "msw";
import { reviews } from "./api/reviews";
import { Book } from "./types";
import { createItemMock } from "./api/createItemMock";

export const handlers = [
  rest.get(`/reviews`, reviews),
  rest.get(`/items/:id`, reviews),
  rest.post(`/item`, createItemMock),
];
