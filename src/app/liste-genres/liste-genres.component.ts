import { Component, OnInit } from '@angular/core';
import { Genre } from '../model/genre.model';
import { LivreService } from '../service/livre.service';
@Component({
  selector: 'app-liste-genres',
  templateUrl: './liste-genres.component.html',
  styleUrls: ['./liste-genres.component.css']
})
export class ListeGenresComponent implements OnInit{

  genres! : Genre[];

  ajout:boolean=true;

  updatedGen: Genre ={"idGen":0, "nomGen":"", "dateCreation":new Date()};
  constructor(private livreService: LivreService){ }

  ngOnInit(): void {
      this.chargerGenres()
  }

  chargerGenres(){
    this.livreService.listeGenres().
    subscribe(gens => {this.genres = gens._embedded.genres;
  console.log(gens)
  });
  }
  genreUpdate(gen : Genre){
    console.log("gere reçu du composant genre", gen);
    this.livreService.ajouterGenre(gen).subscribe(()=> this.chargerGenres());
  }

  updateGen(gen:Genre){
    this.updatedGen = gen;
    this.ajout=false;
  }

}
