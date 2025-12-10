"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download } from "lucide-react";

export function DownloadableGuides() {
  const guides = [
    {
      title: "Guía SEDRONAR - Prevención",
      description: "Manual oficial del gobierno argentino sobre prevención de adicciones y factores de riesgo.",
      size: "Oficial",
      pages: "SEDRONAR",
      downloadUrl: "https://www.argentina.gob.ar/sedronar/prevencion"
    },
    {
      title: "OMS - Trastornos por Uso de Sustancias",
      description: "Información científica de la Organización Mundial de la Salud sobre adicciones.",
      size: "Oficial", 
      pages: "OMS",
      downloadUrl: "https://www.who.int/es/news-room/fact-sheets/detail/mental-disorders"
    },
    {
      title: "Ministerio de Salud - Recursos",
      description: "Materiales educativos y de prevención del Ministerio de Salud de Argentina.",
      size: "Oficial",
      pages: "MSAL",
      downloadUrl: "https://www.argentina.gob.ar/salud/mental-y-adicciones"
    }
  ];

  return (
    <section>
      <h2 className="text-3xl font-bold mb-8">Guías Descargables</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {guides.map((guide, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <FileText className="h-10 w-10 text-primary" />
                <Badge>PDF</Badge>
              </div>
              <CardTitle>{guide.title}</CardTitle>
              <CardDescription>{guide.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full" asChild>
                <a href={guide.downloadUrl} target="_blank" rel="noopener noreferrer">
                  <Download className="h-4 w-4 mr-2" />
                  Ver Recursos Oficiales
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
