import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'; // Import map operator
import { Icd10SearchResult } from '../models/icd10-search-result';

@Injectable({
  providedIn: 'root'
})
export class Icd10SearchService {
  private apiBase = 'http://16.171.249.214:8080'; // Replace with your actual API base URL
  // private apiBase = 'https://5xsmx2omy8.execute-api.eu-north-1.amazonaws.com'; 

  constructor(private http: HttpClient) {}

  searchByDescription(description: string): Observable<Icd10SearchResult[]> {
    const payload = { query: description }; // JSON body
    return this.http.post<{ icd10codes: Icd10SearchResult[] }>(
      `${this.apiBase}/api/search-by-description`,
      payload
    ).pipe(
      map(response => response.icd10codes) // Extract the icd10codes array
    );
  }

  searchBySymptoms(symptoms: string): Observable<Icd10SearchResult[]> {
    const payload = { query: symptoms }; // JSON body
    return this.http.post<{ icd10codes: Icd10SearchResult[] }>(
      `${this.apiBase}/api/search-by-symptoms`,
      payload
    ).pipe(
      map(response => response.icd10codes) // Extract the icd10codes array
    );
  }
}
