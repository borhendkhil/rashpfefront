import { Marque } from "./marque";
import { Categorie } from "./categorie";
import { User } from "./user";
import { Commande } from "./commande";

export class Produit {
  idPROD?: number;
  nomprod?: string;
  reference?: number;
  prix?: number;
  description?: string;
  flag?: boolean;
  image?: string; // Ajouté pour correspondre à l'attribut image dans le backend
  date?: Date; // Ajouté pour correspondre à l'attribut date dans le backend

  m?: Marque;
  //stock?: Stock[]; // Décommenter et définir si la classe Stock est définie dans le frontend
  categorie?: Categorie;
  userEntityList?: User[];
  commandes?: Commande[];
}
