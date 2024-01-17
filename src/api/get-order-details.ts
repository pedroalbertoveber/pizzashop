import { api } from '@/lib/axios'

export type GetOrderDetailsParams = {
  orderId: string
}

export type GetOrderDetailsResponse = {
  id: string
  createdAt: string
  status:
    | 'pending'
    | 'completed'
    | 'canceled'
    | 'processing'
    | 'delivering'
    | 'delivered'
  customer: {
    name: string
    email: string
    phone: string
  }
  totalInCents: number
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrderDetails({ orderId }: GetOrderDetailsParams) {
  const response = await api.get<GetOrderDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
