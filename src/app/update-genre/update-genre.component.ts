import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Genre } from '../model/genre.model';

@Component({
  selector: 'app-update-genre',
  templateUrl: './update-genre.component.html',
  styleUrls: ['./update-genre.component.css']
})
export class UpdateGenreComponent implements OnInit{
  @Input()
  genre! : Genre;

  @Input()
  ajout:boolean=true;

  @Output()
  genreUpdated =new EventEmitter<Genre>();

  ngOnInit(): void {
    console.log("ngOnInit du composant UpdateGenre",this.genre);
  }

  saveGenre(){
    this.genreUpdated.emit(this.genre);
  }
}
