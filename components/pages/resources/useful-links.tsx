"use client";

import { BookOpen, ExternalLink } from "lucide-react";

export function UsefulLinks() {
  const links = [
    {
      title: "NIDA - Instituto Nacional sobre Abuso de Drogas",
      description: "Investigación y recursos científicos"
    },
    {
      title: "SAMHSA - Servicios de Salud Mental",
      description: "Recursos de tratamiento y recuperación"
    },
    {
      title: "OMS - Organización Mundial de la Salud",
      description: "Información global sobre adicciones"
    },
    {
      title: "SEDRONAR Argentina",
      description: "Secretaría de Políticas Integrales sobre Drogas"
    }
  ];

  return (
    <section className="bg-primary/5 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Enlaces Útiles</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {links.map((link, index) => (
          <a
            key={index}
            href="#"
            className="flex items-center gap-3 p-4 bg-background rounded-lg hover:shadow-md transition-shadow"
          >
            <BookOpen className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <p className="font-semibold">{link.title}</p>
              <p className="text-sm text-muted-foreground">{link.description}</p>
            </div>
            <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
          </a>
        ))}
      </div>
    </section>
  );
}
