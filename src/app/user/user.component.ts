import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit{
utilisateurs: any [] = []
constructor(
  private userservice: UserService
){}

ngOnInit(): void {
  this.userservice.getinfo().subscribe((data:any)=>{
    this.utilisateurs= data
    console.log(this.utilisateurs); 
  })
}
}
