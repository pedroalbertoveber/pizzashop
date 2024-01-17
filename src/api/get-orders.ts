import { api } from '@/lib/axios'

export type GetOrdersParams = {
  pageIndex?: number | null
  orderId?: string | null
  status?: string | null
  customerName?: string | null
}

export type GetOrdersResponse = {
  orders: {
    orderId: string
    createdAt: string
    status:
      | 'pending'
      | 'completed'
      | 'canceled'
      | 'processing'
      | 'delivering'
      | 'delivered'
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders({
  pageIndex = 0,
  customerName,
  orderId,
  status,
}: GetOrdersParams) {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex,
      customerName,
      orderId,
      status,
    },
  })

  return response.data
}
