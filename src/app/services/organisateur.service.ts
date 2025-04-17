import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Organisateur {
  id: number,
  nom: string;
  prenom: string;
  nationalite: string;
  dateNaissance: string;
  email: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class OrganisateurService {
  private apiUrl = 'http://localhost:8080/organisateur';

  constructor(private http: HttpClient) { }

  getOrganisateurs(): Observable<Organisateur[]> {
    return this.http.get<Organisateur[]>(this.apiUrl);
  }

  getOrganisateurById(id: number): Observable<Organisateur> {
    return this.http.get<Organisateur>(`${this.apiUrl}/${id}`);
  }

  createOrganisateur(organisateur: Organisateur): Observable<Organisateur> {
    return this.http.post<Organisateur>(this.apiUrl, organisateur, {
      responseType: 'text' as 'json'
    });
  }

  updateOrganisateur(id: number, organisateur: Organisateur): Observable<Organisateur> {
    return this.http.put<Organisateur>(`${this.apiUrl}/${id}`, organisateur, {
      responseType: 'text' as 'json'
    });
  }

  deleteOrganisateur(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}` , {
      responseType: 'text' as 'json'
    });
  }
}
