import { api } from '@/lib/axios'

export type CancelOrderParams = {
  orderId: string
}

export async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`)
}
