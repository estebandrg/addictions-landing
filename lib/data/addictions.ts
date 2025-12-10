import { Wine, Cigarette, Pill, Gamepad2, Smartphone, TrendingDown, LucideIcon } from "lucide-react";

export interface AddictionType {
  icon: LucideIcon;
  title: string;
  description: string;
  impacts: string[];
}

export const addictionTypes: AddictionType[] = [
  {
    icon: Wine,
    title: "Alcohol",
    description: "Una de las adicciones más comunes. El consumo excesivo puede llevar a dependencia física y psicológica.",
    impacts: [
      "Afecta el sistema nervioso central",
      "Impacto en relaciones personales",
      "Riesgos para la salud a largo plazo"
    ]
  },
  {
    icon: Cigarette,
    title: "Tabaco",
    description: "La nicotina es altamente adictiva y responsable de millones de muertes prevenibles anualmente.",
    impacts: [
      "Enfermedades cardiovasculares",
      "Cáncer y problemas respiratorios",
      "Dependencia física y psicológica"
    ]
  },
  {
    icon: Pill,
    title: "Drogas",
    description: "Sustancias ilegales y medicamentos mal utilizados que alteran el funcionamiento cerebral.",
    impacts: [
      "Daño cerebral permanente",
      "Riesgo de sobredosis fatal",
      "Consecuencias legales graves"
    ]
  },
  {
    icon: Gamepad2,
    title: "Videojuegos",
    description: "El uso excesivo puede interferir con la vida diaria, relaciones y responsabilidades.",
    impacts: [
      "Aislamiento social",
      "Problemas de sueño y salud física",
      "Bajo rendimiento académico/laboral"
    ]
  },
  {
    icon: Smartphone,
    title: "Redes Sociales",
    description: "La dependencia digital afecta la salud mental y las relaciones interpersonales.",
    impacts: [
      "Ansiedad y depresión",
      "Comparación social constante",
      "Pérdida de productividad"
    ]
  },
  {
    icon: TrendingDown,
    title: "Juego/Apuestas",
    description: "La ludopatía puede destruir finanzas personales y relaciones familiares.",
    impacts: [
      "Problemas financieros severos",
      "Estrés y ansiedad extrema",
      "Deterioro de relaciones"
    ]
  }
];
