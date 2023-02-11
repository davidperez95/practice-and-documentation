import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {

  configUrl = 'assets/config.json';

  constructor(private http: HttpClient) { }
}
