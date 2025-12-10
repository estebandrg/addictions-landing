"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, BookOpen } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px]" />
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl mb-4">
              Si Estás Pensando en Hacerte Daño
            </CardTitle>
            <CardDescription className="text-primary-foreground/90 text-lg">
              <strong>Por favor, llama ahora.</strong> Cada vida importa. Hay personas que se preocupan por ti y quieren ayudarte.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6 relative">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" asChild>
                <a href="tel:141">
                  <Phone className="h-5 w-5" />
                  Llamar 141 Ahora
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="gap-2 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link href="/recursos">
                  <BookOpen className="h-5 w-5" />
                  Explorar Recursos
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-primary-foreground/90 font-medium">
                ✅ Gratuito • ✅ Confidencial • ✅ 24/7 • ✅ Sin juicios
              </p>
              <p className="text-xs text-primary-foreground/70">
                No tienes que enfrentar esto solo. Estos profesionales están entrenados para ayudar.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
