"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Target, Heart } from "lucide-react";

export function PreventionLevels() {
  const levels = [
    {
      icon: Shield,
      title: "Prevención Primaria",
      description: "Evitar que las adicciones comiencen. Dirigida a toda la población.",
      items: [
        "Educación desde edad temprana",
        "Promoción de estilos de vida saludables",
        "Fortalecimiento de factores protectores"
      ]
    },
    {
      icon: Target,
      title: "Prevención Secundaria",
      description: "Detección temprana e intervención en grupos de riesgo.",
      items: [
        "Screening y evaluación",
        "Intervenciones breves",
        "Programas para grupos vulnerables"
      ]
    },
    {
      icon: Heart,
      title: "Prevención Terciaria",
      description: "Prevenir recaídas y reducir daños en personas con adicción.",
      items: [
        "Tratamiento y rehabilitación",
        "Prevención de recaídas",
        "Reintegración social"
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Niveles de Prevención</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {levels.map((level, index) => {
              const Icon = level.icon;
              return (
                <Card key={index}>
                  <CardHeader>
                    <Icon className="h-10 w-10 text-primary mb-2" />
                    <CardTitle>{level.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{level.description}</p>
                    <ul className="text-sm space-y-2">
                      {level.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
