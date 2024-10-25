import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [FormsModule],
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
  @Input()dispo: boolean = true;
  
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
