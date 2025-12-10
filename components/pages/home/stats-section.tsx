"use client";

export function StatsSection() {
  const stats = [
    { value: "35M+", label: "Personas afectadas globalmente" },
    { value: "70%", label: "Tasa de recuperación con tratamiento" },
    { value: "24/7", label: "Líneas de ayuda disponibles" },
    { value: "100%", label: "Confidencialidad garantizada" },
  ];

  return (
    <section className="py-16 border-y bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-primary">{stat.value}</div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
