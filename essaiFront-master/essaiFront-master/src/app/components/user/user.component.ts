
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { get } from 'http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [];
 

  constructor(private user: UserService, private http: HttpClient) { }


  ngOnInit(): void {
    this.getAllUsers();
    
  
    
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  getAllUsers(): void {
    this.user.getAllUsers(this.getToken()).subscribe(
      response => {
        this.users = response;
        console.log('Utilisateurs récupérés', this.users);
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }



}
