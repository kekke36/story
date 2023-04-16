import { rest } from "msw";
import { createItemMock } from "./api/createItemMock";
import { reviews } from "./api/reviews";
import { Book } from "./types";

export const handlers = [
  rest.get(`/reviews`, reviews),
  rest.get(`/items/:id`, reviews),
  rest.post(`/item`, createItemMock),
];
