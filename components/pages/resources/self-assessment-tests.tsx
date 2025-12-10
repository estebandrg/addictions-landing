"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckSquare } from "lucide-react";

export function SelfAssessmentTests() {
  const tests = [
    {
      title: "Test de Riesgo de Adicción",
      description: "Cuestionario confidencial para evaluar factores de riesgo personales."
    },
    {
      title: "Evaluación de Uso de Sustancias",
      description: "Herramienta para identificar patrones problemáticos de consumo."
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Tests de Autoevaluación</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {tests.map((test, index) => (
          <Card key={index} className="border-2 hover:border-primary/50 transition-colors">
            <CardHeader>
              <CheckSquare className="h-10 w-10 text-primary mb-2" />
              <CardTitle>{test.title}</CardTitle>
              <CardDescription>{test.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full gap-2">
                <CheckSquare className="h-4 w-4" />
                Realizar Test
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
