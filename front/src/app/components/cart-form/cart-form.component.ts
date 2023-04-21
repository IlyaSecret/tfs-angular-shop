import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../../shared/services/country.service";
import {CurrencyService} from "../../../shared/services/currency.service";
import {CartService} from "../../../shared/services/cart.service";
import { ICountry } from 'src/shared/models/ICountry';
import {find, map, Observable, ReplaySubject, takeUntil} from "rxjs";
import {ICurrency} from "../../../shared/models/ICurrency";
import {ICartItem} from "../../../shared/models/ICartItem";

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit{
  countries!: ICountry[];
  countriesNames!: string[];
  private currentCountry!: ICountry;
  cartSummary!: Observable<ICurrency>;
  destroy: ReplaySubject<any> = new ReplaySubject<any>();
  constructor(private readonly countriesService: CountryService, private readonly currencySerivce: CurrencyService, private readonly cartService: CartService) {
  }

  ngOnInit(): void {
    this.countriesService.getAll().subscribe(items => {
        this.countries = items;
        this.countriesNames = items.map(el => el.name);
      }
    );

    this.form.get('country')?.valueChanges.subscribe((country: string)=> {
      let countryInfo: ICountry | undefined = this.countries.find((ctry: ICountry) => ctry.name === country)
      if (countryInfo) {
        this.currencySerivce.getExchange(this.currencySerivce.current, countryInfo.currencies[0].code, this.currencySerivce.summ);
      }
    })
  }


  form: FormGroup = new FormGroup({
    address: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required)
  })
}
