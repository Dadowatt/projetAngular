import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ArticleComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  comment1 = "velo";
  comment2 = "voiture";
  comment3 = "avion";
  comment4 = "hoodie 3D";
  comment5 = "sac à main";
  comment6 = "coffret";
  photo1 = "assets/1.jpg";
  photo2 = "assets/2.jpg";
  photo3 = "assets/3.jpg";
  photo4 = "assets/4.jpg";
  photo5 = "assets/5.jpg";
  photo6 = "assets/6.jpg";
  prix1 = 15000;
  prix2 = 15000;
  prix3 =15000;
  prix4 = 15000;
  prix5 =15000;
  prix6 = 15000;
  dispo1 = "disponible";
  dispo2 = "non disponible";
  dispo3 = "disponible";
  dispo4 = "non disponible";
  dispo5 = "disponible";
  dispo6 = "non disponible";
  message="";

  onAffiche(arg:string){
    this.message = "merci d'avoir liké " +arg;
  }
}
