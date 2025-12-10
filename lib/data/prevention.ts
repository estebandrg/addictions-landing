import { Target, Users, Brain, Heart, LucideIcon } from "lucide-react";

export interface PreventionStrategy {
  icon: LucideIcon;
  title: string;
  description: string;
  actions: string[];
}

export const preventionStrategies: PreventionStrategy[] = [
  {
    icon: Target,
    title: "Educación Temprana",
    description: "Informar desde edades tempranas sobre los riesgos y consecuencias de las adicciones.",
    actions: [
      "Programas escolares de prevención",
      "Diálogo abierto en familia",
      "Recursos educativos accesibles"
    ]
  },
  {
    icon: Users,
    title: "Apoyo Social",
    description: "Mantener relaciones saludables y redes de apoyo fuertes es fundamental.",
    actions: [
      "Participación en actividades grupales",
      "Comunicación familiar efectiva",
      "Grupos de apoyo comunitarios"
    ]
  },
  {
    icon: Brain,
    title: "Salud Mental",
    description: "Cuidar la salud mental reduce significativamente el riesgo de adicciones.",
    actions: [
      "Terapia psicológica preventiva",
      "Manejo del estrés y ansiedad",
      "Desarrollo de resiliencia emocional"
    ]
  },
  {
    icon: Heart,
    title: "Estilo de Vida Saludable",
    description: "Hábitos saludables fortalecen el bienestar físico y emocional.",
    actions: [
      "Ejercicio físico regular",
      "Alimentación balanceada",
      "Sueño adecuado y rutinas"
    ]
  }
];
