import { Permissions } from "./permission";

export class Role {
  // id?: number;
  label: string;
  flag?: boolean;
  permissions?: Permissions[];
}
