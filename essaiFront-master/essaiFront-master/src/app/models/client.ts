import { User } from "./user";

export class Client {
  id?: number;
  nom?: string;
  prenom?: string;
  email?: string;
  numtel?: number;
  codepostal?: number;
  datenais?: Date;
  cin?: number;
  flag?: boolean;
  addresse?: string;
  user?: User;
}
