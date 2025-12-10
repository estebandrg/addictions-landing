"use client";

import { Button } from "@/components/ui/button";
import { Phone, AlertTriangle } from "lucide-react";

export function EmergencyBanner() {
  return (
    <div className="bg-destructive text-destructive-foreground py-3 px-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 animate-pulse" />
          <span className="font-medium text-sm md:text-base">
            <strong>¿En crisis?</strong> Ayuda inmediata disponible 24/7
          </span>
        </div>
        <div className="flex gap-2">
          <Button 
            size="sm" 
            variant="secondary" 
            className="gap-1 bg-white text-destructive hover:bg-gray-100"
            asChild
          >
            <a href="tel:141">
              <Phone className="h-4 w-4" />
              141
            </a>
          </Button>
          <Button 
            size="sm" 
            variant="secondary" 
            className="gap-1 bg-white text-destructive hover:bg-gray-100"
            asChild
          >
            <a href="tel:135">
              <Phone className="h-4 w-4" />
              135
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
