import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './article.component.html',
  styleUrl: './article.component.css'
})
export class ArticleComponent {

  produits = [
    { comment: "velo", prix: 15000, dispo: false, photo: "assets/1.jpg" },
    { comment: "voiture", prix: 15000, dispo: true, photo: "assets/2.jpg" },
    { comment: "avion", prix: 15000, dispo: false, photo: "assets/3.jpg" },
    { comment: "hoodie 3D", prix: 15000, dispo: true, photo: "assets/4.jpg" },
    { comment: "sac à main", prix: 15000, dispo: false, photo: "assets/5.jpg" },
    { comment: "coffret", prix: 15000, dispo: true, photo: "assets/6.jpg" },
  ];

  // @Input()comment="";
  // @Output()info = new EventEmitter<string>();
  // @Input()photo="";
  // like: number = 0;
  // commentaires = "texte initial"
  // @Input()prix:number = 0;
  // @Input()dispo: boolean = false;
  
  // public addLike(){
  //   this.like++;
  //   this.info.emit(this.comment)
  // }
  // disLike(){
  //   if(this.like > 0){
  //     this.like--;
  //   }
  // }

}
