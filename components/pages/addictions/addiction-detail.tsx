"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Wine, Cigarette, Pill, Gamepad2, Smartphone, TrendingDown } from "lucide-react";

const iconMap = {
  Wine,
  Cigarette,
  Pill,
  Gamepad2,
  Smartphone,
  TrendingDown
};

interface AddictionDetailProps {
  iconName: string;
  title: string;
  badge: string;
  badgeVariant?: "default" | "destructive" | "secondary";
  description: string;
  healthEffects: string[];
  warningSignsOrData: string[];
  warningSignsTitle?: string;
}

export function AddictionDetail({
  iconName,
  title,
  badge,
  badgeVariant = "destructive",
  description,
  healthEffects,
  warningSignsOrData,
  warningSignsTitle = "Señales de Alerta"
}: AddictionDetailProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap];
  return (
    <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
      <Card className="sticky top-24">
        <CardHeader className="text-center">
          <Icon className="h-16 w-16 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl">{title}</CardTitle>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </CardHeader>
      </Card>
      
      <div className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Descripción</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">{description}</p>
            <div>
              <h4 className="font-semibold mb-2">Efectos en la Salud:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {healthEffects.map((effect, i) => (
                  <li key={i}>• {effect}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">{warningSignsTitle}:</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                {warningSignsOrData.map((sign, i) => (
                  <li key={i}>• {sign}</li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
