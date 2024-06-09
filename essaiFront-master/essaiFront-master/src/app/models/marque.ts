import { Produit } from "./produit";

export class Marque {
  id?: number;
  libm?: string;
  description?: string;
  flag?: boolean;
  image?: string; // Ajouté pour correspondre à l'attribut image dans le backend
  p?: Produit[]; // Corrigé pour refléter la relation OneToMany
}
