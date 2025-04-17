import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Concert {
  id: number;
  capacite: number;
  description: string;
  prix: number;
  lieu: string;
  date: string; 
  pays: string;
  organisateurId: number;
  genreMusicalId: number;
  artistesIds: number[];
  ticketsIds?: number[]; // Optionnel
}

@Injectable({
  providedIn: 'root'
})
export class ConcertService {

  // URL de base de l'API REST pour les concerts
  private apiUrl = 'http://localhost:8080/concert';

  constructor(private http: HttpClient) { }

  // Récupération de la liste de tous les concerts
  getConcerts(): Observable<Concert[]> {
    return this.http.get<Concert[]>(`${this.apiUrl}/`);
  }

  // Récupération d'un concert par son id
  getConcertById(id: number): Observable<Concert> {
    return this.http.get<Concert>(`${this.apiUrl}/${id}`);
  }

  // Création d'un nouveau concert
  createConcert(concert: Concert): Observable<Concert> {
    return this.http.post<Concert>(this.apiUrl, concert, {
      responseType: 'text' as 'json'
    });
  }

  // Mise à jour d'un concert existant
  updateConcert(id: number, concert: Concert): Observable<Concert> {
    return this.http.put<Concert>(`${this.apiUrl}/${id}`, concert, {
      responseType: 'text' as 'json'
    });
  }

  // Suppression d'un concert
  deleteConcert(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {
      responseType: 'text' as 'json'
    });
  }
}
