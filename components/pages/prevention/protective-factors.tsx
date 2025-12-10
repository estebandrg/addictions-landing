"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users } from "lucide-react";

export function ProtectiveFactors() {
  const factors = [
    {
      icon: Brain,
      title: "Individuales",
      items: [
        "Autoestima saludable",
        "Habilidades de afrontamiento",
        "Pensamiento crítico",
        "Metas y proyectos de vida",
        "Resiliencia emocional"
      ]
    },
    {
      icon: Users,
      title: "Sociales",
      items: [
        "Relaciones familiares positivas",
        "Amistades saludables",
        "Participación comunitaria",
        "Apoyo social fuerte",
        "Sentido de pertenencia"
      ]
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Factores Protectores</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {factors.map((factor, index) => {
          const Icon = factor.icon;
          return (
            <Card key={index}>
              <CardHeader>
                <Icon className="h-10 w-10 text-primary mb-2" />
                <CardTitle>{factor.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {factor.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
