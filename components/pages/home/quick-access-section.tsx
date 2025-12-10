"use client";

import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AlertCircle, Shield, Sparkles, Phone, ArrowRight, TrendingUp } from "lucide-react";

export function QuickAccessSection() {
  const resources = [
    {
      href: "/adicciones",
      icon: AlertCircle,
      title: "Tipos de Adicciones",
      description: "Información detallada sobre diferentes tipos de adicciones, sus efectos en la salud y señales de alerta tempranas.",
      badges: ["Alcohol", "Drogas", "Tecnología", "Juego"],
      highlight: false,
    },
    {
      href: "/prevencion",
      icon: Shield,
      title: "Estrategias de Prevención",
      description: "Métodos comprobados y consejos prácticos para prevenir adicciones en diferentes etapas de la vida.",
      badges: ["Educación", "Familia", "Comunidad"],
      highlight: false,
    },
    {
      href: "/recursos",
      icon: Sparkles,
      title: "Recursos y Herramientas",
      description: "Guías descargables, videos educativos y material de apoyo para pacientes y familias.",
      badges: ["Guías PDF", "Videos", "Tests"],
      highlight: false,
    },
    {
      href: "/ayuda",
      icon: Phone,
      title: "Buscar Ayuda Inmediata",
      description: "Líneas de crisis 24/7, centros de tratamiento cercanos y grupos de apoyo disponibles.",
      badges: [],
      highlight: true,
    },
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explora Nuestros Recursos
          </h2>
          <p className="text-lg text-muted-foreground">
            Encuentra información específica sobre diferentes aspectos de la prevención y tratamiento de adicciones.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Link key={index} href={resource.href} className="group">
                <Card className={`h-full hover:shadow-lg transition-all hover:border-primary/50 ${resource.highlight ? 'bg-primary/5' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="text-2xl">{resource.title}</CardTitle>
                    <CardDescription className="text-base">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  {resource.badges.length > 0 ? (
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {resource.badges.map((badge, i) => (
                          <Badge key={i} variant="secondary">{badge}</Badge>
                        ))}
                      </div>
                    </CardContent>
                  ) : (
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm font-medium text-primary">
                        <TrendingUp className="h-4 w-4" />
                        Disponible las 24 horas
                      </div>
                    </CardContent>
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
