import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Artiste {
  id: number,
  nom: string;
  prenom: string;
  nationalite: string;
  dateNaissance: string; // Format ISO peut-être, ou éventuellement LocalDateTime côté Java
  email: string;
  tel: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArtisteService {
  private apiUrl = 'http://localhost:8080/artiste';

  constructor(private http: HttpClient) { }

  getArtistes(): Observable<Artiste[]> {
    return this.http.get<Artiste[]>(this.apiUrl);
  }

  getArtisteById(id: number): Observable<Artiste> {
    return this.http.get<Artiste>(`${this.apiUrl}/${id}`);
  }

  createArtiste(artiste: Artiste): Observable<Artiste> {
    return this.http.post<Artiste>(this.apiUrl, artiste, {
      responseType: 'text' as 'json'
    });
  }

  updateArtiste(id: number, artiste: Artiste): Observable<Artiste> {
    return this.http.put<Artiste>(`${this.apiUrl}/${id}`, artiste, {
      responseType: 'text' as 'json'
    });
  }

  deleteArtiste(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}` , {
      responseType: 'text' as 'json'
    });
  }
}
