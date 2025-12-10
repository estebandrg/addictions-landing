import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { WarningSignCard } from "@/components/landing/warning-sign-card";
import { warningSignCategories } from "@/lib/data/warning-signs";
import { Clock, Phone } from "lucide-react";

export function WarningSignsSection() {
  return (
    <section id="senales" className="container py-24">
      <SectionHeader
        title="Señales de Alerta"
        description="Reconocer las señales tempranas puede marcar la diferencia. Presta atención a estos indicadores."
      />
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {warningSignCategories.map((category, index) => (
            <WarningSignCard key={index} category={category} />
          ))}
        </div>
        
        <Card className="mt-8 bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              ¿Identificaste alguna señal?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              No esperes a que la situación empeore. La intervención temprana es clave para una recuperación exitosa.
            </p>
            <Button className="gap-2">
              <Phone className="h-4 w-4" />
              Contactar con un Profesional
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
