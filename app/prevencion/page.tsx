import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { PreventionLevels } from "@/components/pages/prevention/prevention-levels";
import { StrategiesByContext } from "@/components/pages/prevention/strategies-by-context";
import { ProtectiveFactors } from "@/components/pages/prevention/protective-factors";

export const metadata = {
  title: "Estrategias de Prevención | Prevención de Adicciones",
  description: "Métodos comprobados y consejos prácticos para prevenir adicciones.",
};

export default function PrevencionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline">Prevención Basada en Evidencia</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Estrategias de Prevención</h1>
            <p className="text-lg text-muted-foreground">
              La prevención es la forma más efectiva de combatir las adicciones. 
              Estas estrategias están respaldadas por investigación científica.
            </p>
          </div>
        </div>
      </section>

      <PreventionLevels />

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-16">
            <StrategiesByContext />
            <ProtectiveFactors />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
