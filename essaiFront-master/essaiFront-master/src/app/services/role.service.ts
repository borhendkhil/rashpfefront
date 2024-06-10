import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Role } from '../models/role';
import { ɵnormalizeQueryParams } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  private baseUrl = environment.apiUrl + '/role';

  constructor(private http: HttpClient) { }

  // getServiceUrl() {
  //   return this.baseUrl;
  // }
  createRole(role: Role, token: string): Observable<Role> {
    let queryParams = new HttpParams();
    queryParams = queryParams.set('label', role.label);
    return this.http.post<Role>(this.baseUrl + "/add", role, { headers: { 'Authorization': `Bearer ${token}` } });
  }

  updateRole(roleId: any, updatedRole: Role): Observable<Role> {
    return this.http.put<Role>(`${this.baseUrl}/${roleId}`, updatedRole);
  }

  getRoles(): Observable<any> {
    console.log("base url ---> ", this.baseUrl);

    return this.http.get<any>(`${this.baseUrl}`);
  }

  getRoleById(id: string): Observable<Role> {
    return this.http.get<Role>(`${this.baseUrl}/${id}`);
  }

  deleteRole(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  deleteRoles(ids: string[]): Observable<any> {
    return this.http.delete(`${this.baseUrl}/batch`, { params: { ids: ids.join(',') } });
  }

}