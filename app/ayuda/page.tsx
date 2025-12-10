import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { CrisisLines } from "@/components/pages/help/crisis-lines";
import { TreatmentCenters } from "@/components/pages/help/treatment-centers";
import { SupportGroups } from "@/components/pages/help/support-groups";

export const metadata = {
  title: "Buscar Ayuda | Prevención de Adicciones",
  description: "Líneas de crisis, centros de tratamiento y grupos de apoyo disponibles 24/7.",
};

export default function AyudaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-b from-destructive/10 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="destructive">Ayuda Inmediata</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">No Estás Solo</h1>
            <p className="text-lg text-muted-foreground">
              Hay profesionales disponibles para ayudarte en cualquier momento. 
              Todas las consultas son confidenciales y sin costo.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            <CrisisLines />
            <TreatmentCenters />
            <SupportGroups />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
