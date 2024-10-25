import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { ArticleComponent } from './article/article.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, ArticleComponent, SidebarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstProject';
  message="";

  produits = [
    { comment: "velo", prix: 15000, dispo: false, photo: "assets/1.jpg" },
    { comment: "voiture", prix: 15000, dispo: true, photo: "assets/2.jpg" },
    { comment: "avion", prix: 15000, dispo: false, photo: "assets/3.jpg" },
    { comment: "hoodie 3D", prix: 15000, dispo: true, photo: "assets/4.jpg" },
    { comment: "sac à main", prix: 15000, dispo: false, photo: "assets/5.jpg" },
    { comment: "coffret", prix: 15000, dispo: true, photo: "assets/6.jpg" },
  ];

  onAffiche(arg:string){
    this.message = "merci d'avoir liké " +arg;
  }
}
