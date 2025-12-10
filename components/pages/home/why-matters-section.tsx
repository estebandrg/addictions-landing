"use client";

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Heart } from "lucide-react";

export function WhyMattersSection() {
  const reasons = [
    {
      icon: Brain,
      title: "Información Científica",
      description: "Contenido basado en investigaciones y estudios actualizados sobre adicciones y tratamientos efectivos.",
    },
    {
      icon: Users,
      title: "Apoyo Profesional",
      description: "Acceso directo a líneas de ayuda, centros de tratamiento y grupos de apoyo especializados.",
    },
    {
      icon: Heart,
      title: "Recursos Gratuitos",
      description: "Guías, herramientas y material educativo sin costo para prevención y recuperación.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            La Prevención Salva Vidas
          </h2>
          <p className="text-lg text-muted-foreground">
            Las adicciones son enfermedades tratables que afectan el cerebro y el comportamiento. 
            La detección temprana y el tratamiento adecuado pueden marcar la diferencia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{reason.title}</CardTitle>
                  <CardDescription>{reason.description}</CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
