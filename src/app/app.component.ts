import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ArticleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  comment1 = "velo";
  comment2 = "voiture";
  comment3 = "avion";
  photo1 = "assets/tof.png";
  photo2 = "assets/t2.webp";
  photo3 = "assets/t1.webp";
}
