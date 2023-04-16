import { RestContext } from 'msw'

export const createItemMock = (_req: any, res: any, ctx: RestContext) => {
  // return res.networkError;
  return res(ctx.delay(1000), ctx.json({}))
}
