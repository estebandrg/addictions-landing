import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { WarningSignCategory } from "@/lib/data/warning-signs";

interface WarningSignCardProps {
  category: WarningSignCategory;
}

export function WarningSignCard({ category }: WarningSignCardProps) {
  return (
    <Card className="border-l-4 border-l-destructive">
      <CardHeader>
        <AlertCircle className="h-6 w-6 text-destructive mb-2" />
        <CardTitle className="text-lg">{category.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {category.signs.map((sign, index) => (
            <li key={index}>• {sign}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
