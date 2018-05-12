import { Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) { }

  getData(){
    return this.http.get('https://private-7cf60-4youseesocialtest.apiary-mock.com/timeline')
      .pipe(map(res => res.json()));
  }
}
