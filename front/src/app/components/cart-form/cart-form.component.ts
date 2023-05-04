import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CountryService} from "../../../shared/services/country.service";
import {CurrencyService} from "../../../shared/services/currency.service";
import {CartService} from "../../../shared/services/cart.service";
import { ICountry } from 'src/shared/models/ICountry';
import {Subject, switchMap, takeUntil, tap} from "rxjs";
import {SummaryService} from "../../../shared/services/summary.service";
import { ICurrency } from 'src/shared/models/ICurrency';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.scss']
})
export class CartFormComponent implements OnInit, OnDestroy{
  private countries!: ICountry[];
  countriesNames!: string[];
  private current:string =  "RUB";
  to: string = "RUB";
  private readonly destroy$ = new Subject();
  readonly form: FormGroup = new FormGroup({
    address: new FormControl(null, Validators.required),
    username: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    country: new FormControl(null, Validators.required)
  })

  constructor(private readonly countriesService: CountryService, private readonly currencyService: CurrencyService, private readonly cartService: CartService, public readonly summarySerivce: SummaryService) {
  }

  ngOnInit(): void {
    this.countriesService.getAll().pipe(takeUntil(this.destroy$)).pipe(takeUntil(this.destroy$)).subscribe((items) => {
        this.countries = items;
        this.countriesNames = items.map((el: ICountry) => el.name);
      }
    )

    this.form
      .get('country')
      ?.valueChanges.pipe(
      switchMap(country => {
        let countryInfo: ICountry = this.countries.find(
          (ctry: ICountry) => ctry.name === country,
        );
          return this.currencyService
            .getExchange(this.current, countryInfo.currencies[0].code, this.summarySerivce.summ)
            .pipe(
              tap(el => {
                this.to = el.query.to;
                this.summarySerivce.updateSumm(
                  this.currencyService.coefficient,
                  this.cartService.cartPurchases,
                );
              }),
            );
      }),
    )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.destroy$.next(1);
    this.destroy$.complete();
  }

}
