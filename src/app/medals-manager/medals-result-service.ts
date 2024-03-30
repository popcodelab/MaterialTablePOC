// medal-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CountryResult} from "./country-result";

// Angular's dependency injection system can recognize it as a potential candidate for injection
@Injectable()
export class MedalDataService {

  constructor(private http: HttpClient) { }

  getMedalData(): Observable<CountryResult[]> {
    const result: Observable<CountryResult[]> = this.http.get<any>('assets/data/medal-data.json');
    console.table(result);
    return result;
  }
}

