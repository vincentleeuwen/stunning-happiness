
interface Translations {
  de: string;
  en: string; 
}

export interface CareService {
  id: string;
  intro: Translations;
  level: number;
  title: Translations;
}