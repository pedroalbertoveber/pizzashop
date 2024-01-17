import { api } from '@/lib/axios'

export type SignInBody = {
  email: string
}

export async function singIn({ email }: SignInBody) {
  await api.post('/authenticate', { email })
}
