import { RestContext, rest } from "msw";
import { Review } from "../types";

export const reviews = (_req: any, res: any, ctx: RestContext) => {
  // return res.networkError;
  return res(
    ctx.delay(3000),
    ctx.json<Review[]>([
      {
        id: "60333292-7ca1-4361-bf38-b6b43b90cb16",
        author: "John Maverick",
        text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The trilogy is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!",
      },
    ])
  );
};
