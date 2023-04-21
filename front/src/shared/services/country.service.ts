import {Inject, Injectable} from "@angular/core";
import {ICountry} from "../models/ICountry";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

const url = 'https://restcountries.com/v2/all';

@Injectable({
  providedIn: "root"
})
export class CountryService {
  private _countriesList: ICountry[] = [];
  private _countriesNames: string[] = [];
  private _currentCountry: string = 'Russian Federation';

  get countriesList(): ICountry[] {
    return this._countriesList;
  }
  get countriesNames(): string[] {
    return this._countriesNames;
  }
  get currentCountry(): string {
    return this._currentCountry;
  }
  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(url)
  }
}
