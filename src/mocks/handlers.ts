import { rest } from 'msw'
import { createItemMock } from './api/createItemMock'
import { getItemsMock } from './api/getItemsMock'

export const handlers = [rest.get(`/item`, getItemsMock), rest.post(`/item`, createItemMock)]
