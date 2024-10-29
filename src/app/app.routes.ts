import { Routes } from '@angular/router';
import { ArticleComponent } from './article/article.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: 'article', component: ArticleComponent},
    { path: 'accueil', component: AppComponent},
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: 'login', pathMatch: 'full'}
    
];
