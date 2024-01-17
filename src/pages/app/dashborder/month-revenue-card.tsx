import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthRevenue } from '@/api/get-month-revenue'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

import { MetricCardSkeleton } from './metric-card-skeleton'

export function MonthRevenueCard() {
  const { data: monthRevenueAmount } = useQuery({
    queryKey: ['metrics', 'month-revenue'],
    queryFn: getMonthRevenue,
  })

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Receita total (mês)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>

      <CardContent className="space-y-1">
        {monthRevenueAmount ? (
          <>
            <span className="block text-2xl font-bold tracking-tight">
              {(monthRevenueAmount.receipt / 100).toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>

            <p className="text-xs text-muted-foreground">
              {monthRevenueAmount.diffFromLastMonth >= 0 ? (
                <span className="text-emerald-500 dark:text-emerald-400">
                  + {monthRevenueAmount.diffFromLastMonth}%
                </span>
              ) : (
                <span className="text-rose-500 dark:text-rose-400">
                  {monthRevenueAmount.diffFromLastMonth}%
                </span>
              )}{' '}
              em relação a ontem
            </p>
          </>
        ) : (
          <MetricCardSkeleton />
        )}
      </CardContent>
    </Card>
  )
}
