import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, BookOpen } from "lucide-react";

export function Hero() {
  return (
    <section className="container py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center space-y-8">
        <Badge variant="outline" className="px-4 py-1">
          <Shield className="h-3 w-3 mr-2 inline" />
          Información Confiable y Actualizada
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          Prevención de Adicciones: Tu Salud, Tu Futuro
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Información esencial sobre prevención, identificación temprana y recursos de ayuda profesional para adicciones.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="gap-2">
            <Phone className="h-5 w-5" />
            Buscar Ayuda Ahora
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            <BookOpen className="h-5 w-5" />
            Más Información
          </Button>
        </div>
      </div>
    </section>
  );
}
