import { SectionHeader } from "@/components/landing/section-header";
import { PreventionCard } from "@/components/landing/prevention-card";
import { preventionStrategies } from "@/lib/data/prevention";

export function PreventionSection() {
  return (
    <section id="prevencion" className="container py-24 bg-muted/30">
      <SectionHeader
        title="Estrategias de Prevención"
        description="La prevención es la herramienta más poderosa. Conoce cómo protegerte y proteger a tus seres queridos."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {preventionStrategies.map((strategy, index) => (
          <PreventionCard key={index} strategy={strategy} />
        ))}
      </div>
    </section>
  );
}
