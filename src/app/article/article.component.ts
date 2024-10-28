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
  @Input()comment="";
  @Output()info = new EventEmitter<string>();
  @Input()photo="";
  like: number = 0;
  commentaires = "texte initial"
  @Input()prix:number = 0;
  @Input()dispo: boolean = false;
  
  public addLike(){
    this.like++;
    this.info.emit(this.comment)
  }
  disLike(){
    if(this.like > 0){
      this.like--;
    }
  }
}
