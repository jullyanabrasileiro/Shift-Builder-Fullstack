import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('http://localhost:3000/users/1').subscribe((data) => {
      this.user = data;
    });
  }

  updateProfile() {
    this.http.put(`http://localhost:3000/users/${this.user.id}`, this.user).subscribe(() => {
      alert('Perfil atualizado com sucesso!');
    });
  }
}
