import { rest } from "msw";
import { reviews } from "./api/reviews";
import { Book } from "./types";

export const handlers = [
  rest.get("https://my.backend/book", (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: "Lord of the Rings",
        imageUrl: "/book-cover.jpg",
        description:
          "The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.",
      })
    );
  }),
  rest.get(`/reviews`, reviews),
];
