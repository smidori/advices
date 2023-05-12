import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  endpoint = 'https://api.adviceslip.com/advice'
  constructor(private http: HttpClient) { }

  getRandomAdvice() {
    return this.http.get<any>(this.endpoint);
  }

  getAdvicesAbout(subject) {
    console.log("subject " + subject)
    return this.http.get<any>(this.endpoint+"/search/"+subject);
  }



}
