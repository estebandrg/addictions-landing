"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Phone, Clock } from "lucide-react";

export function CrisisLines() {
  const lines = [
    {
      number: "141",
      tel: "tel:141",
      title: "SEDRONAR Argentina",
      description: "Línea gratuita de orientación y contención para personas con problemas de consumo de sustancias y sus familias."
    },
    {
      number: "135", 
      tel: "tel:135",
      title: "Atención al Suicida",
      description: "Centro de Asistencia al Suicida. Atención inmediata para crisis emocionales y pensamientos suicidas."
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8 text-center">Líneas de Crisis 24/7</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {lines.map((line, index) => (
          <Card key={index} className="border-2 border-primary">
            <CardHeader className="text-center">
              <Phone className="h-16 w-16 text-primary mx-auto mb-4" />
              <CardTitle className="text-3xl">{line.number}</CardTitle>
              <CardDescription className="text-lg">{line.title}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-center text-muted-foreground">{line.description}</p>
              <div className="flex items-center justify-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-primary" />
                <span>Disponible 24 horas, 7 días a la semana</span>
              </div>
              <Button className="w-full" size="lg" asChild>
                <a href={line.tel}>
                  <Phone className="h-5 w-5 mr-2" />
                  Llamar Ahora
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
