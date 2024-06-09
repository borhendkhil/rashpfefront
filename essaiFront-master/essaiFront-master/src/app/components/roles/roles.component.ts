import { Component, OnDestroy, OnInit } from '@angular/core';
import { Role } from 'src/app/models/role';
import { RoleService } from 'src/app/services/role.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.scss'
})
export class RolesComponent implements OnInit, OnDestroy {

  roles: Role[]
  role: Role

  constructor(private roleService: RoleService) { }

  ngOnInit(): void {
    this.roleService.getRoles().subscribe(roles => {
      console.log("roles --->", roles);
      this.roles = roles;
    });

    //this.loadRoles();

  }
  ngOnDestroy() {

  }

  addRole() {
    this.roleService.createRole(this.role).subscribe(
      (data: Role) => {
        this.roles.push(data);
      },
      (error: any) => {
        console.error('Error creating role', error);
      }
    );
  }
  /*
  loadRoles(): void {
    this.roleService.getRoles().subscribe(
      (data: Role[]) => {
        this.roles = data;
      },
      (error: any) => {
        console.error('Error fetching roles', error);
      }
    );
  }
*/
}