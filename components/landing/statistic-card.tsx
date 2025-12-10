import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Statistic } from "@/lib/data/statistics";

interface StatisticCardProps {
  stat: Statistic;
}

export function StatisticCard({ stat }: StatisticCardProps) {
  return (
    <Card className="text-center">
      <CardHeader>
        <CardTitle className="text-4xl font-bold text-primary">{stat.value}</CardTitle>
        <CardDescription>{stat.label}</CardDescription>
      </CardHeader>
    </Card>
  );
}
