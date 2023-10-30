import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LivreService } from '../service/livre.service';
import { Livre } from '../model/livre.model';
import { Genre } from '../model/genre.model';
import { GenreWrapper } from '../model/GenreWrapped';

@Component({
  selector: 'app-update-livre',
  templateUrl: './update-livre.component.html',
  styleUrls: ['./update-livre.component.css']
})
export class UpdateLivreComponent implements OnInit {
  genres!: Genre[];
  updatedGenId?: number;
  currentLivre = new Livre();
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private livreService: LivreService
  ) { }

  ngOnInit(): void {
    const livreId = this.activatedRoute.snapshot.params['id'];

    this.livreService.listeGenres().subscribe((genreWrapper: GenreWrapper) => {
      console.log(genreWrapper);
      this.genres = genreWrapper._embedded.genres;
    });

    this.livreService.consulterLivre(livreId).subscribe((liv: Livre) => {
      this.currentLivre = liv;
      this.updatedGenId = this.currentLivre.genre?.idGen;
    });
  }



  updateLivre() {
    //console.log(this.currentLivre);
    this.currentLivre.genre= this.genres.find(gen => gen.idGen == this.updatedGenId)!;
    this.livreService.updateLivre(this.currentLivre).subscribe(liv => {
    this.router.navigate(['/livres']); // Navigate back to the livres list
  }
  );
  }
}
