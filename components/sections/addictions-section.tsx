import { SectionHeader } from "@/components/landing/section-header";
import { AddictionCard } from "@/components/landing/addiction-card";
import { addictionTypes } from "@/lib/data/addictions";

export function AddictionsSection() {
  return (
    <section id="tipos" className="container py-24">
      <SectionHeader
        title="Tipos de Adicciones"
        description="Las adicciones pueden manifestarse de diversas formas. Conocerlas es el primer paso para la prevención."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {addictionTypes.map((addiction, index) => (
          <AddictionCard key={index} addiction={addiction} />
        ))}
      </div>
    </section>
  );
}
