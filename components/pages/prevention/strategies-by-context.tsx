"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, School, Users } from "lucide-react";

export function StrategiesByContext() {
  const contexts = [
    {
      icon: Home,
      title: "En la Familia",
      strategies: [
        {
          title: "Comunicación Efectiva",
          items: [
            "Mantener diálogo abierto y sin juicios",
            "Escuchar activamente las preocupaciones",
            "Establecer expectativas claras",
            "Discutir riesgos de forma honesta"
          ]
        },
        {
          title: "Supervisión y Apoyo",
          items: [
            "Conocer amistades y actividades",
            "Establecer límites consistentes",
            "Ser modelo de comportamiento saludable",
            "Fortalecer vínculos familiares"
          ]
        }
      ]
    },
    {
      icon: School,
      title: "En la Escuela",
      strategies: [
        {
          title: "Programas Educativos",
          items: [
            "Educación sobre drogas basada en evidencia",
            "Desarrollo de habilidades sociales",
            "Manejo de presión de pares",
            "Toma de decisiones saludables"
          ]
        },
        {
          title: "Ambiente Escolar",
          items: [
            "Políticas claras sobre sustancias",
            "Actividades extracurriculares",
            "Apoyo psicológico disponible",
            "Detección temprana de problemas"
          ]
        }
      ]
    },
    {
      icon: Users,
      title: "En la Comunidad",
      strategies: [
        {
          title: "Acciones Comunitarias",
          items: [
            "Campañas de concientización",
            "Espacios recreativos seguros",
            "Programas deportivos y culturales",
            "Redes de apoyo comunitario"
          ]
        },
        {
          title: "Políticas Públicas",
          items: [
            "Regulación de venta de alcohol y tabaco",
            "Acceso a tratamiento gratuito",
            "Prevención en lugares de trabajo",
            "Reducción de estigma"
          ]
        }
      ]
    }
  ];

  return (
    <section className="bg-muted/30 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Estrategias por Contexto</h2>
      <div className="space-y-8">
        {contexts.map((context, index) => {
          const Icon = context.icon;
          return (
            <div key={index}>
              <div className="flex items-center gap-3 mb-4">
                <Icon className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-bold">{context.title}</h3>
              </div>
              <Card>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {context.strategies.map((strategy, i) => (
                      <div key={i}>
                        <h4 className="font-semibold mb-3">{strategy.title}</h4>
                        <ul className="text-sm space-y-2 text-muted-foreground">
                          {strategy.items.map((item, j) => (
                            <li key={j}>• {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          );
        })}
      </div>
    </section>
  );
}
