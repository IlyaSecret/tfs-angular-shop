import {Injectable} from "@angular/core";
import {ICountry} from "../models/ICountry";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class CountryService {
  private readonly _url = 'https://restcountries.com/v2/all';
  constructor(private readonly httpClient: HttpClient) {
  }

  getAll(): Observable<ICountry[]> {
    return this.httpClient.get<ICountry[]>(this._url)
  }
}
