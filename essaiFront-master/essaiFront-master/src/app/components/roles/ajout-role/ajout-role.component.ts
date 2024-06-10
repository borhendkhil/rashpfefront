import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-ajout-role',
  templateUrl: './ajout-role.component.html',
  styleUrl: './ajout-role.component.scss'
})
export class AjoutRoleComponent {

  addRoleFomrGroupe = new FormGroup({
    roleNameFormControl: new FormControl(),
  })

  role: Role;

  constructor(private roleService: RoleService ,private http: HttpClient) { }

  get addRoleFormControl() {
    return this.addRoleFomrGroupe.controls;
  }
  getToken(): string | null {
    return localStorage.getItem('accessToken');
  }

  submit(): void {
    console.log("test ---> ", this.addRoleFormControl.roleNameFormControl.value);
    this.role = {
      label: this.addRoleFormControl.roleNameFormControl.value
    };
    console.log(this.role.label);

    this.roleService.createRole(this.role, this.getToken()).subscribe(() => {
      // Handle success or error here
    });
  }

}
