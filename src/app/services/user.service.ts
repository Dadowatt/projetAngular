import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://67295b286d5fa4901b6ce942.mockapi.io/10hetudiant/utilisateur'
  constructor(
    private http: HttpClient
  ) { }
  
  getinfo(){
    return this.http.get(this.apiUrl)
  }
}
