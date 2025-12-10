"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Video, ExternalLink } from "lucide-react";

export function EducationalVideos() {
  const videos = [
    {
      title: "SEDRONAR - ¿Qué son las Adicciones?",
      description: "Video educativo oficial sobre prevención y tratamiento de adicciones en Argentina.",
      duration: "YouTube",
      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.youtube.com/results?search_query=SEDRONAR+adicciones+prevención"
    },
    {
      title: "OMS - Salud Mental y Adicciones",
      description: "Información científica de la Organización Mundial de la Salud sobre trastornos por uso de sustancias.",
      duration: "YouTube",
      thumbnail: "/api/placeholder/300/200", 
      videoUrl: "https://www.youtube.com/results?search_query=OMS+adicciones+salud+mental"
    },
    {
      title: "Ministerio de Salud - Recursos",
      description: "Materiales audiovisuales del Ministerio de Salud sobre prevención y tratamiento.",
      duration: "Oficial",
      thumbnail: "/api/placeholder/300/200",
      videoUrl: "https://www.argentina.gob.ar/salud/mental-y-adicciones"
    }
  ];

  return (
    <section className="bg-muted/30 p-8 rounded-lg">
      <h2 className="text-3xl font-bold mb-8">Videos Educativos</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <Card key={index}>
            <CardHeader>
              <Video className="h-10 w-10 text-primary mb-2" />
              <CardTitle className="text-lg">{video.title}</CardTitle>
              <CardDescription className="text-sm">{video.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full gap-2" size="sm" variant="outline">
                <ExternalLink className="h-4 w-4" />
                Ver Video
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
