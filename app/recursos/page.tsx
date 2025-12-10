import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Phone, ExternalLink } from "lucide-react";

export const metadata = {
  title: "Recursos y Herramientas | Prevención de Adicciones",
  description: "Guías, videos y material educativo para prevención y recuperación.",
};

export default function RecursosPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="outline">Material Educativo</Badge>
            <h1 className="text-4xl md:text-5xl font-bold">Recursos y Herramientas</h1>
            <p className="text-lg text-muted-foreground">
              Material descargable, guías prácticas y recursos educativos para prevención y recuperación.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Recursos Oficiales Gobierno */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Recursos Oficiales del Gobierno</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  SEDRONAR Argentina
                </h3>
                <p className="text-muted-foreground mb-4">
                  Secretaría de Políticas Integrales sobre Drogas. Información oficial, programas de prevención y tratamiento.
                </p>
                <Button asChild>
                  <a href="https://www.argentina.gob.ar/sedronar" target="_blank" rel="noopener noreferrer">
                    Visitar Sitio Oficial
                  </a>
                </Button>
              </div>
              
              <div className="bg-primary/5 p-6 rounded-lg border">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <ExternalLink className="h-5 w-5" />
                  Ministerio de Salud
                </h3>
                <p className="text-muted-foreground mb-4">
                  Dirección Nacional de Salud Mental y Adicciones. Políticas públicas y recursos para profesionales.
                </p>
                <Button asChild>
                  <a href="https://www.argentina.gob.ar/salud/mental-y-adicciones" target="_blank" rel="noopener noreferrer">
                    Ver Recursos
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Líneas de Ayuda */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Líneas de Ayuda Inmediata</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-destructive/10 p-6 rounded-lg border border-destructive/20 text-center">
                <Phone className="h-12 w-12 text-destructive mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">141</h3>
                <p className="text-sm text-muted-foreground mb-4">SEDRONAR - Orientación sobre adicciones</p>
                <Button 
                  className="w-full bg-destructive hover:bg-destructive/90"
                  onClick={() => window.location.href = 'tel:141'}
                >
                  Llamar Ahora
                </Button>
              </div>
              
              <div className="bg-orange-100 p-6 rounded-lg border border-orange-200 text-center">
                <Phone className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">135</h3>
                <p className="text-sm text-muted-foreground mb-4">Centro de Asistencia al Suicida</p>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                  onClick={() => window.location.href = 'tel:135'}
                >
                  Llamar Ahora
                </Button>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 text-center">
                <Phone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">144</h3>
                <p className="text-sm text-muted-foreground mb-4">Violencia de Género</p>
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  onClick={() => window.location.href = 'tel:144'}
                >
                  Llamar Ahora
                </Button>
              </div>
            </div>
          </div>

          {/* Organizaciones Reconocidas */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Organizaciones Especializadas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Alcohólicos Anónimos Argentina</h3>
                <p className="text-muted-foreground mb-4">
                  Grupos de apoyo gratuitos para personas con problemas de alcohol. Reuniones presenciales y virtuales.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://www.aa.org.ar" target="_blank" rel="noopener noreferrer">
                    Encontrar Grupo
                  </a>
                </Button>
              </div>
              
              <div className="p-6 border rounded-lg">
                <h3 className="text-xl font-bold mb-3">Narcóticos Anónimos Argentina</h3>
                <p className="text-muted-foreground mb-4">
                  Programa de recuperación para personas con problemas de drogas. Comunidad de apoyo mutuo.
                </p>
                <Button variant="outline" asChild>
                  <a href="https://www.na.org.ar" target="_blank" rel="noopener noreferrer">
                    Información
                  </a>
                </Button>
              </div>
              
            </div>
          </div>


        </div>
      </section>

      <Footer />
    </div>
  );
}
