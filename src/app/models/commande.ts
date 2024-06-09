import { Client } from "./client";

export class Commande {
  idcmd?: number;
  numtransac?: number;
  datecmd?: Date;
  etatcmd?: string;
  nbarticle?: number;
  totalcmd?: number;
  flag?: boolean;
  client?: Client;
}
