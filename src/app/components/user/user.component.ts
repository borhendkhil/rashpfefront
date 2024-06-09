
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

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
    this.getToken();
  }


  getAllUsers(): void {
    this.user.getAllUsers().subscribe(
      response => {
        this.users = response;
      },
      error => {
        console.error('Erreur lors de la récupération des utilisateurs', error);
      }
    );
  }

  getToken(): void {
    this.http.get('https://dummy-endpoint.com').subscribe(
      response => {
        // Access the token here
        const token = response['token'];
        console.log('Token:', token);
      },
      error => {
        console.error('Error while getting token', error);
      }
    );
  }
}
