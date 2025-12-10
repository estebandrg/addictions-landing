export interface WarningSignCategory {
  title: string;
  signs: string[];
}

export const warningSignCategories: WarningSignCategory[] = [
  {
    title: "Cambios de Comportamiento",
    signs: [
      "Cambios bruscos de humor o personalidad",
      "Aislamiento social y pérdida de interés",
      "Secretismo y mentiras frecuentes",
      "Descuido de responsabilidades",
      "Cambios en el círculo social"
    ]
  },
  {
    title: "Señales Físicas",
    signs: [
      "Cambios en el apetito o peso",
      "Problemas de sueño persistentes",
      "Deterioro de la apariencia personal",
      "Ojos rojos o pupilas dilatadas",
      "Temblores o falta de coordinación"
    ]
  },
  {
    title: "Problemas Académicos/Laborales",
    signs: [
      "Bajo rendimiento repentino",
      "Ausencias frecuentes injustificadas",
      "Falta de concentración",
      "Pérdida de motivación",
      "Problemas disciplinarios"
    ]
  },
  {
    title: "Problemas Financieros",
    signs: [
      "Pedir dinero prestado constantemente",
      "Desaparición de objetos de valor",
      "Gastos inexplicables",
      "Deudas crecientes",
      "Problemas legales relacionados"
    ]
  }
];
