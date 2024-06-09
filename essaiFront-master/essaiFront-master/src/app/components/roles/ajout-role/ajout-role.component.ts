import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

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

  constructor(private roleService: RoleService) { }

  get addRoleFormControl() {
    return this.addRoleFomrGroupe.controls;
  }

  submit(): void {
    console.log("test ---> ", this.addRoleFormControl.roleNameFormControl.value);
    this.role = {
      label: this.addRoleFormControl.roleNameFormControl.value
    };
    console.log(this.role.label);

    this.roleService.createRole(this.role).subscribe();
  }

}
