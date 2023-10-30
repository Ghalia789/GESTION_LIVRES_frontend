import { Genre } from "./genre.model";

export class Livre {
  idLivre? : number;
  auteurLivre? : string;
  datePublication? : Date;
  prixLivre? : number;
  quantiteStock? : number;
  titreLivre! : string;
  genre?: Genre;
  }
