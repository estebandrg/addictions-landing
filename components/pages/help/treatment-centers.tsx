"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Clock, Shield } from "lucide-react";

export function TreatmentCenters() {
  const centers = [
    {
      name: "Centro de Día SEDRONAR",
      location: "Buenos Aires, Argentina",
      badge: "Público",
      badgeVariant: "default" as const,
      description: "Tratamiento ambulatorio gratuito para personas con problemas de consumo de sustancias. Incluye terapia individual, grupal y familiar.",
      address: "Av. Julio A. Roca 782, CABA",
      phone: "(011) 4320-8900"
    },
    {
      name: "Hospital de Salud Mental",
      location: "Atención de Emergencias",
      badge: "Urgencias",
      badgeVariant: "destructive" as const,
      description: "Atención de urgencias psiquiátricas y desintoxicación. Disponible 24/7 para situaciones de crisis que requieren atención médica inmediata.",
      address: null,
      phone: null
    }
  ];

  return (
    <section className="bg-muted/30 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8 text-center">Centros de Tratamiento</h2>
      <div className="space-y-6">
        {centers.map((center, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">{center.name}</CardTitle>
                  <CardDescription>{center.location}</CardDescription>
                </div>
                <Badge variant={center.badgeVariant}>{center.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">{center.description}</p>
              <div className="flex flex-wrap gap-4 text-sm">
                {center.address && (
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span>{center.address}</span>
                  </div>
                )}
                {center.phone && (
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>{center.phone}</span>
                  </div>
                )}
                {!center.phone && (
                  <>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-primary" />
                      <span>Guardia 24 horas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Shield className="h-4 w-4 text-primary" />
                      <span>Atención gratuita</span>
                    </div>
                  </>
                )}
              </div>
              <Button variant="outline" className="w-full">
                {center.address ? (
                  <>
                    <MapPin className="h-4 w-4 mr-2" />
                    Ver Ubicación
                  </>
                ) : (
                  <>
                    <Phone className="h-4 w-4 mr-2" />
                    Contactar
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        ))}
        <div className="text-center">
          <Button size="lg" variant="outline">
            Ver Todos los Centros Cercanos
          </Button>
        </div>
      </div>
    </section>
  );
}
