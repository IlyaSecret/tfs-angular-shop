import {Observable} from "rxjs";
import {ICountry} from "../models/ICountry";
import {InjectionToken} from "@angular/core";
export const COUNTRY_API_SERVICE_TOKEN = new InjectionToken('COUNTRY_API_SERVICE_TOKEN');

export interface ICountriesApiService {
  getAll(): Observable<ICountry[]>
}
