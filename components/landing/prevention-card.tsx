import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { PreventionStrategy } from "@/lib/data/prevention";

interface PreventionCardProps {
  strategy: PreventionStrategy;
}

export function PreventionCard({ strategy }: PreventionCardProps) {
  const Icon = strategy.icon;
  
  return (
    <Card>
      <CardHeader>
        <Icon className="h-8 w-8 text-primary mb-2" />
        <CardTitle>{strategy.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground">{strategy.description}</p>
        <ul className="space-y-2 text-sm">
          {strategy.actions.map((action, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{action}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
