import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { AddictionType } from "@/lib/data/addictions";

interface AddictionCardProps {
  addiction: AddictionType;
}

export function AddictionCard({ addiction }: AddictionCardProps) {
  const Icon = addiction.icon;
  
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <Icon className="h-10 w-10 text-primary mb-2" />
        <CardTitle>{addiction.title}</CardTitle>
        <CardDescription>{addiction.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {addiction.impacts.map((impact, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
              <span>{impact}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
