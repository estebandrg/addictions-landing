import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SectionHeader } from "@/components/landing/section-header";
import { Phone, LifeBuoy, Users, CheckCircle2, AlertCircle } from "lucide-react";
import { helplines, treatmentCenterFeatures, supportGroups } from "@/lib/data/resources";

export function ResourcesSection() {
  return (
    <section id="recursos" className="container py-24 bg-muted/30">
      <SectionHeader
        title="Recursos de Ayuda"
        description="No estás solo. Hay profesionales y organizaciones dispuestos a ayudarte en cualquier momento."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Crisis Hotlines */}
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Líneas de Crisis</CardTitle>
            <CardDescription>Atención inmediata 24/7</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {helplines.map((helpline, index) => (
                <div key={index} className="p-3 bg-muted rounded-lg">
                  <p className="font-semibold text-2xl">{helpline.number}</p>
                  <p className="text-sm text-muted-foreground">{helpline.name}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Treatment Centers */}
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <LifeBuoy className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Centros de Tratamiento</CardTitle>
            <CardDescription>Programas especializados</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-left">
              {treatmentCenterFeatures.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full mt-4">
              Buscar Centros Cercanos
            </Button>
          </CardContent>
        </Card>

        {/* Support Groups */}
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardHeader>
            <Users className="h-12 w-12 text-primary mx-auto mb-4" />
            <CardTitle>Grupos de Apoyo</CardTitle>
            <CardDescription>Comunidad y recuperación</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-left">
              {supportGroups.map((group, index) => (
                <li key={index} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{group}</span>
                </li>
              ))}
            </ul>
            <Button variant="outline" className="w-full mt-4">
              Encontrar Reuniones
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Emergency CTA */}
      <Card className="mt-12 max-w-3xl mx-auto bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle className="text-2xl text-center">¿Necesitas Ayuda Urgente?</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg">
            Si tú o alguien que conoces está en crisis, no dudes en buscar ayuda profesional inmediatamente.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="gap-2">
              <Phone className="h-5 w-5" />
              Llamar Ahora: 141
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
            >
              <AlertCircle className="h-5 w-5" />
              Chat en Línea
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
