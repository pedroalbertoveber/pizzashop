import { api } from '@/lib/axios'

export type RegisterRestaurantBody = {
  restaurantName: string
  managerName: string
  email: string
  phone: string
}

export async function registerRestaurant({
  restaurantName,
  managerName,
  email,
  phone,
}: RegisterRestaurantBody) {
  await api.post('/restaurants', { email, restaurantName, managerName, phone })
}
