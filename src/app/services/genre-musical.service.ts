import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface GenreMusical {
  id: number,
  nom: string;
}

@Injectable({
  providedIn: 'root'
})
export class GenreMusicalService {
  private apiUrl = 'http://localhost:8080/genreMusical';

  constructor(private http: HttpClient) { }

  getGenreMusicals(): Observable<GenreMusical[]> {
    return this.http.get<GenreMusical[]>(this.apiUrl);
  }

  getGenreMusicalById(id: number): Observable<GenreMusical> {
    return this.http.get<GenreMusical>(`${this.apiUrl}/${id}`);
  }

  createGenreMusical(genreMusical: GenreMusical): Observable<GenreMusical> {
    return this.http.post<GenreMusical>(this.apiUrl, genreMusical, {
      responseType: 'text' as 'json'
    });
  }

  updateGenreMusical(id: number, genreMusical: GenreMusical): Observable<GenreMusical> {
    return this.http.put<GenreMusical>(`${this.apiUrl}/${id}`, genreMusical, {
      responseType: 'text' as 'json'
    });
  }

  deleteGenreMusical(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}` , {
      responseType: 'text' as 'json'
    });
  }
}
