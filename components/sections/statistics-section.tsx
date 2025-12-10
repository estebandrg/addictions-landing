import { StatisticCard } from "@/components/landing/statistic-card";
import { statistics } from "@/lib/data/statistics";

export function StatisticsSection() {
  return (
    <section className="container py-16 bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {statistics.map((stat, index) => (
          <StatisticCard key={index} stat={stat} />
        ))}
      </div>
    </section>
  );
}
