import { LivreService } from './../service/livre.service';
import { Component, OnInit } from '@angular/core';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { LivresComponent } from '../livres/livres.component';
@Component({
  selector: 'app-recherche-par-genre',
  templateUrl: './recherche-par-genre.component.html',
  styleUrls: ['./recherche-par-genre.component.css']
})
export class RechercheParGenreComponent implements OnInit {

  livres! : Livre[];
  IdGen! : number;
  genres! : Genre[];
  constructor(private livreService: LivreService) { }

  ngOnInit(): void {
    this.livreService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
    console.log(gens);
    });
    }

    onChange() {
      this.livreService.rechercherParGenre(this.IdGen).
      subscribe(livs =>{this.livres=livs});
      }
}
