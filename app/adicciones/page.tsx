import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Activity, Heart, AlertTriangle } from "lucide-react";
import { AddictionDetail } from "@/components/pages/addictions/addiction-detail";
import { addictionsData } from "@/lib/data/addictions-data";

export const metadata = {
  title: "Tipos de Adicciones | Prevención de Adicciones",
  description: "Información detallada sobre diferentes tipos de adicciones, sus efectos y señales de alerta.",
};

export default function AdiccionesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline" className="mb-2">Información Educativa</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Tipos de Adicciones</h1>
            <p className="text-lg text-muted-foreground">
              Las adicciones son enfermedades crónicas del cerebro que afectan el sistema de recompensa, 
              motivación y memoria. Conocer sus tipos es el primer paso para la prevención.
            </p>
          </div>
        </div>
      </section>

      {/* Understanding Addiction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">¿Qué es una Adicción?</h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardHeader>
                  <Brain className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">Cambios Cerebrales</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Las adicciones alteran la química cerebral, afectando el sistema de recompensa 
                    y la toma de decisiones.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Activity className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">Comportamiento Compulsivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Pérdida de control sobre el consumo o comportamiento, a pesar de las 
                    consecuencias negativas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Heart className="h-10 w-10 text-primary mb-2" />
                  <CardTitle className="text-xl">Enfermedad Tratable</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Con tratamiento adecuado y apoyo, la recuperación es posible y sostenible 
                    a largo plazo.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Addiction Types */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Principales Tipos de Adicciones</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cada adicción tiene características únicas, pero todas comparten patrones similares 
                de comportamiento y requieren tratamiento especializado.
              </p>
            </div>

            {addictionsData.map((addiction, index) => (
              <AddictionDetail key={index} {...addiction} />
            ))}
          </div>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto border-destructive/50 bg-destructive/5">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="h-8 w-8 text-destructive" />
                <CardTitle className="text-2xl">Importante: Busca Ayuda Profesional</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Si tú o alguien que conoces está luchando con una adicción, es crucial buscar ayuda profesional. 
                Las adicciones son enfermedades médicas que requieren tratamiento especializado.
              </p>
              <p className="font-semibold">
                No intentes superar una adicción solo. El tratamiento profesional aumenta significativamente 
                las posibilidades de recuperación exitosa y duradera.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}
