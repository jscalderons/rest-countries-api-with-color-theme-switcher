import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { ICountry } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private _countries: ICountry[] = [];

  constructor(
    private http: HttpClient
  ) {}

  get countries() { return this._countries; };

  setCountries(countries: ICountry[]) {
    this._countries = countries;
  }

  fetchCountries(): Observable<ICountry[]>  {
    return this.http.get<ICountry[]>(`${environment.api.countries}/all`, {
      params: {
        fields: "alpha3Code,name,population,capital,region,flag"
      }
    })
  }

  fetchCountryByCode(code: string): Observable<ICountry>  {
    return this.http.get<ICountry>(`${environment.api.countries}/alpha/${code}`, {
      params: {
        fields: "alpha3Code,name,nativeName,population,capital,region,subregion,flag,topLevelDomain,currencies,languages,borders"
      }
    });
  }

  fetchCountryByCodeList(codes: string[] = []): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(`${environment.api.countries}/alpha`, {
      params: {
        fields: "alpha3Code,name",
        codes: codes.join(',')
      }
    });
  }
}
