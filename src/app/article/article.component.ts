import { Component, Input } from '@angular/core';
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
  like: number = 0;
  photo = "/assets/tof.png"
  commentaires = "texet initial"
  public addLike(){
    this.like++;
  }

}
