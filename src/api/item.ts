import axios from 'axios'

export const getItems = async () => {
  const { data } = await axios.get<{ name: string }[]>(`/item`)
  return data
}

export type CreateItemRequest = { name: string }

export type CreateItemResponse = { id: string }

export const createItem = async (params: CreateItemRequest) => {
  const { data } = await axios.post<CreateItemResponse>('/item', params)
  return data
}
