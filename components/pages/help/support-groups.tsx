"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Shield } from "lucide-react";

export function SupportGroups() {
  const groups = [
    {
      name: "Alcohólicos Anónimos",
      description: "Programa de 12 pasos para la recuperación del alcoholismo. Reuniones presenciales y virtuales."
    },
    {
      name: "Narcóticos Anónimos",
      description: "Comunidad de recuperación para personas con adicción a drogas. Apoyo mutuo y sin costo."
    },
    {
      name: "Al-Anon",
      description: "Apoyo para familiares y amigos de personas con problemas de alcoholismo."
    }
  ];

  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Grupos de Apoyo</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <Card key={index}>
              <CardHeader className="text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <CardTitle>{group.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground text-center">{group.description}</p>
                <Button variant="outline" className="w-full">
                  Encontrar Reuniones
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <Card className="bg-primary/5 border-primary/20">
        <CardHeader className="text-center">
          <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl">Recuerda</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center max-w-2xl mx-auto">
          <p className="text-muted-foreground">
            Buscar ayuda es un acto de valentía, no de debilidad. La adicción es una enfermedad 
            médica que requiere tratamiento profesional.
          </p>
          <p className="font-semibold">
            La recuperación es posible. Miles de personas superan sus adicciones cada año con 
            el apoyo adecuado.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm">
            <Shield className="h-4 w-4 text-primary" />
            <span>Todas las consultas son confidenciales</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
