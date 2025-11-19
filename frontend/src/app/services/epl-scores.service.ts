import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EplScoresService {
  private apiUrl = 'http://localhost:5000/api/scores';

  constructor(private http: HttpClient) {}

  getScores(date?: string): Observable<any> {
    let url = this.apiUrl;
    if (date) {
      url += `?date=${date}`;
    }
    return this.http.get(url);
  }
}
