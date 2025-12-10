"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Phone, BookOpen } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] [mask-image:radial-gradient(white,transparent_85%)]" />
      <div className="container mx-auto px-4 py-24 md:py-32 relative">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm bg-destructive/10 text-destructive border-destructive/20 mb-6">
            <span className="font-medium">🚨 Ayuda Inmediata Disponible 24/7</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block">¿Necesitas</span>
            <span className="block text-primary">
              Ayuda Ahora?
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            <strong>No estás solo.</strong> Si estás luchando contra una adicción o tienes pensamientos de hacerte daño, 
            hay profesionales esperando para ayudarte en este momento.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button size="lg" className="gap-2 text-base bg-destructive hover:bg-destructive/90 text-destructive-foreground" asChild>
              <a href="tel:141">
                <Phone className="h-5 w-5" />
                🚨 LLAMAR 141 AHORA
              </a>
            </Button>
            <Button size="lg" className="gap-2 text-base bg-orange-600 hover:bg-orange-700 text-white" asChild>
              <a href="tel:135">
                <Phone className="h-5 w-5" />
                Llamar 135 - Crisis
              </a>
            </Button>
          </div>
          
          <div className="flex justify-center pt-4">
            <Button size="sm" variant="ghost" className="gap-2 text-sm" asChild>
              <Link href="/ayuda">
                <BookOpen className="h-4 w-4" />
                Ver más opciones de ayuda
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
