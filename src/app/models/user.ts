import { Produit } from './produit';
import { Role } from './role';

export class User {
  id?: number;
  username?: string;
  password?: string;
  mail?: string;
  numTel?: string; // Corrigé pour correspondre à String dans le backend
  flag?: boolean;
  roles?: Role; // Rendu optionnel pour correspondre aux autres propriétés
  produits?: Produit[]; // Ajouté pour correspondre à la relation ManyToMany dans le backend
}
