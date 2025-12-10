export interface HelplineResource {
  number: string;
  name: string;
}

export const helplines: HelplineResource[] = [
  {
    number: "141",
    name: "SEDRONAR Argentina"
  },
  {
    number: "135",
    name: "Atención al Suicida"
  }
];

export const treatmentCenterFeatures = [
  "Internación y ambulatorio",
  "Terapia individual y grupal",
  "Seguimiento post-tratamiento"
];

export const supportGroups = [
  "Alcohólicos Anónimos (AA)",
  "Narcóticos Anónimos (NA)",
  "Grupos familiares (Al-Anon)"
];
