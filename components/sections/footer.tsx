import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <span className="font-bold">Prevención Adicciones</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Información confiable y recursos para la prevención y tratamiento de adicciones.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Guías de Prevención
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Investigaciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Líneas de Crisis
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Centros de Tratamiento
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Grupos de Apoyo
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Profesionales
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nosotros
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 Prevención de Adicciones. Toda la información es de carácter educativo. 
            Consulta siempre con profesionales de la salud.
          </p>
        </div>
      </div>
    </footer>
  );
}
