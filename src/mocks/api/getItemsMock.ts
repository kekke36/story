import { RestContext } from 'msw'

export const getItemsMock = (_req: any, res: any, ctx: RestContext) => {
  // return res.networkError;
  return res(ctx.delay(1000), ctx.json([{ name: 'test' }]))
}
