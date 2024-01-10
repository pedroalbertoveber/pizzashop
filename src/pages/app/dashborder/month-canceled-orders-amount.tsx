import { Utensils } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCanceledOrdersAmount() {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancelamentos no mês (mês)
        </CardTitle>

        <Utensils className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        <span className="block text-2xl font-bold tracking-tight">4</span>

        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-500 dark:text-emerald-400">- 10%</span>{' '}
          em relação ao mês anterior
        </p>
      </CardContent>
    </Card>
  )
}
