import { Role } from "./role";

export class Permissions {
  id?: number;
  name?: string;
  roles?: Role[]; // Corrigé pour refléter la relation ManyToMany
}
